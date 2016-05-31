<?php
require 'vendor/autoload.php';
// Create and configure Slim app
$config = [
	'settings' => [
        'displayErrorDetails' => true
    ],
];

$app = new \Slim\App($config);
$app->add(new \Slim\HttpCache\Cache('public', 43200));

$container = $app->getContainer();
$container['view'] = function ($container) {
    return new \Slim\Views\PhpRenderer('templates/');
};

$container['db'] = function($container){
 return new \PDO('sqlite:./cache/db.content');
};

$container['cache'] = function () {
    return new \Slim\HttpCache\CacheProvider();
};

function curl($platform, $username, $character_id){
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';
	$membership_id = curl_membership_id($platform, $username);

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/'.$platform.'/Account/'.$membership_id.'/Character/'.$character_id.'/Advisors/V2/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->activities;
	return $activities;
};

function curlProgression($platform, $username, $character_id){
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';
	$membership_id = curl_membership_id($platform, $username);

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/'.$platform.'/Account/'.$membership_id.'/Character/'.$character_id.'/Advisors/V2/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->progressions;
	return $activities;
};

function curlBounties($platform, $username, $character_id){
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';
	$membership_id = curl_membership_id($platform, $username);

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/'.$platform.'/Account/'.$membership_id.'/Character/'.$character_id.'/Advisors/V2/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->bounties;
	return $activities;
};

function curl_membership_id($platform, $username){
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';
	$url = 'https://www.bungie.net/platform/Destiny/'.$platform.'/Stats/GetMembershipIdByDisplayName/'.$username.'/?lc=pt-br&definitions=true';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	return $json->Response;
};

function curl_character_list($platform, $membership_id) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';
	$url = 'https://www.bungie.net/platform/Destiny/'.$platform.'/Account/'.$membership_id.'/?lc=pt-br&definitions=true';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$characters = $json->Response->data->characters;
	$arr = [];
	for($i = 0, $c = count($characters); $i < $c; $i++) {
		$obj = new \stdClass;
		$obj->character_id = $characters[$i]->characterBase->characterId;
		$obj->power_level = $characters[$i]->characterBase->powerLevel;
		$obj->raceHash = $characters[$i]->characterBase->raceHash;
		$obj->genderHash = $characters[$i]->characterBase->genderHash;
		$obj->classHash = $characters[$i]->characterBase->classHash;

		$obj->percentToNextLevel = $characters[$i]->percentToNextLevel;

		$obj->emblemPath = $characters[$i]->emblemPath;
		$obj->backgroundPath = $characters[$i]->backgroundPath;
		$obj->characterLevel = $characters[$i]->characterLevel;
		$obj->classDetails = classDefinition($characters[$i]->characterBase->classHash);
		$obj->genderDetails = genderDefinition($characters[$i]->characterBase->genderHash);
		$obj->raceDetails = raceDefinition($characters[$i]->characterBase->raceHash);
		array_push($arr, $obj);
	}
	return $arr;
};

// Define app routes

$app->get('/getCharacterList/{platform}/{username}', function($request, $response, $args){
		$resWithExpires = $this->cache->withExpires($response, time() + 3600);
		$platform = $request->getAttribute('platform');
		$username = $request->getAttribute('username');
		$membership_id = curl_membership_id($platform, $username);
		if($membership_id != 0){

				$character_list = curl_character_list($platform, $membership_id);
				return $resWithExpires->withJson($character_list);
		}else{
			$res = new \stdClass;
			$res->status = 'error';
			return $resWithExpires->withJson($res);
		}

});

$app->get('/selectActivity/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);
	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$selectActivity = [];
	foreach($activities as $key => $activity){
		$identifier = $activity->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($active == 1 &&  $identifier != 'thetakenking' && $identifier != 'kingsfall' && $identifier != 'vaultofglass' && $identifier != 'crota' && $identifier != 'armsday' && $identifier != 'prisonofelders-playlist'){
			$activity->display->identifier = $identifier;
			array_push($selectActivity, $activity->display);
		}
	}
	$result->selectActivity = $selectActivity;
	return $resWithExpires->withJson($selectActivity);
});

$app->get('/activities/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);
	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$activity = new \stdClass;
	$activity = $activities;
  return $resWithExpires->withJson($activity);
});

$app->get('/nightfall/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);
	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$activity = new \stdClass;
	$activity = $activities->nightfall;

	$hash = $activity->display->activityHash;
	$json = getActivity($hash);

	$activity->details = $json->Response->data->activity;

	if(array_key_exists('rewards', $activity->activityTiers[0])){
		$heroicRewards = $activity->activityTiers[0]->rewards;
		$rewards = [];
		for($i = 0, $c = count($heroicRewards); $i < $c; $i++) {
			$rew = $heroicRewards[$i]->rewardItems[0];
			$itemInfo = getItemDetail($rew->itemHash);
			array_push($rewards, $itemInfo);
		}
		$activity->rewards = $rewards;
	}
	return $resWithExpires->withJson($activity);
});

$app->get('/xur/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

  $activity = new \stdClass;
	$activity = $activities->xur;

	// $hash = $activity->display->activityHash;
	$getXur = getXur();
	$xurItems = [];
	$items = [];
	$saleItemCategories = array_reverse($getXur->saleItemCategories);
	for($x = 0, $z = count($saleItemCategories); $x < $z; $x++){
		$obj = new \stdClass;
		$obj->title = $saleItemCategories[$x]->categoryTitle;
		$obj->items = [];
		for($index = 0, $count = count($saleItemCategories[$x]->saleItems); $index < $count; $index++){
				array_push($obj->items, getItemDetail($saleItemCategories[$x]->saleItems[$index]->item->itemHash));
		}
		array_push($xurItems, $obj);
	}

	$activity->items = $xurItems;
	$activity->details = new \stdClass;
	$activity->details->activityName = "Items a venda";
	return $resWithExpires->withJson($activity);
});

$app->get('/trials/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

    $activity = new \stdClass;
  	$activity = $activities->trials;
		$hash = $activity->display->activityHash;
		$json = getActivity($hash);

		$activity->details = $json->Response->data->activity;
		$activity->display->image = $activity->details->pgcrImage;

		// $ibItems = $activity->vendors[0]->bountyHashes;
		// $items = [];
		// foreach($ibItems as $key => $value){
		// 	$item = $value;
		// 	$itemInfo = getItemDetail($item);
		// 	array_push($items, $itemInfo);
		// }
		// $activity->bounties = $items;

	return $resWithExpires->withJson($activity);
});

$app->get('/ironbanner/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$activity = $activities->ironbanner;

	$identifier = $activity->identifier;
	if(array_key_exists('vendors', $activity)){
		$ibItems = $activity->vendors[0]->saleItemCategories[1]->saleItems;
		$items = [];
		for($i = 0, $c = count($ibItems); $i < $c; $i++) {
			$item = $ibItems[$i];
			$itemInfo = getItemDetail($item->item->itemHash);
			array_push($items, $itemInfo);
		}
		$activity->bounties = $items;
	}
  $progression = getProgression($activity->progressionHash, $platform, $username, $character_id);
	if($progression){
		$activity->progress = [];
		$obj = new \stdClass;
		$obj->displayDescription = "Reputação";
		$obj->subDisplayDescription= "Rank";
		$obj->level = $progression->level;
		$obj->progress = $progression->progressToNextLevel;
		$obj->completionValue = $progression->nextLevelAt;
		array_push($activity->progress, $obj);
	}
	return $resWithExpires->withJson($activity);
});

$app->get('/heroicstrike/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$activity = $activities->heroicstrike;

	$identifier = $activity->identifier;
	if(array_key_exists('rewards', $activity->activityTiers[0])){
		$heroicRewards = $activity->activityTiers[0]->rewards;
		$rewards = [];
		for($i = 0, $c = count($heroicRewards); $i < $c; $i++) {
			$rew = $heroicRewards[$i]->rewardItems[0];
			$itemInfo = getItemDetail($rew->itemHash);
			array_push($rewards, $itemInfo);
		}
		$activity->rewards = $rewards;
	}
	return $resWithExpires->withJson($activity);
});

$app->get('/dailychapter/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$activity = $activities->dailychapter;

	$identifier = $activity->identifier;
	$hash = $activity->display->activityHash;
	$json = getActivity($hash);
	if(array_key_exists('rewards', $activity->activityTiers[0])){
		$heroicRewards = $activity->activityTiers[0]->rewards;
		$rewards = [];
		for($i = 0, $c = count($heroicRewards); $i < $c; $i++) {
			$rew = $heroicRewards[$i]->rewardItems[0];
			$itemInfo = getItemDetail($rew->itemHash);
			array_push($rewards, $itemInfo);
		}
		$activity->rewards = $rewards;
	}

	$activity->details = $json->Response->data->activity;
	return $resWithExpires->withJson($activity);
});

$app->get('/dailycrucible/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$activity = $activities->dailycrucible;

	$identifier = $activity->identifier;
	$hash = $activity->display->activityHash;
	$json = getActivity($hash);
	if(array_key_exists('rewards', $activity->activityTiers[0])){
		$heroicRewards = $activity->activityTiers[0]->rewards;
		$rewards = [];
		for($i = 0, $c = count($heroicRewards); $i < $c; $i++) {
			$rew = $heroicRewards[$i]->rewardItems[0];
			$itemInfo = getItemDetail($rew->itemHash);
			array_push($rewards, $itemInfo);
		}
		$activity->rewards = $rewards;
	}

	$activity->details = $json->Response->data->activity;
	return $resWithExpires->withJson($activity);
});

$app->get('/weeklycrucible/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$activity = $activities->weeklycrucible;

	$identifier = $activity->identifier;
	$hash = $activity->display->activityHash;
	$json = getActivity($hash);

	if(array_key_exists('rewards', $activity->activityTiers[0])){
		$heroicRewards = $activity->activityTiers[0]->rewards;
		$rewards = [];
		for($i = 0, $c = count($heroicRewards); $i < $c; $i++) {
			$rew = $heroicRewards[$i]->rewardItems[0];
			$itemInfo = getItemDetail($rew->itemHash);
			array_push($rewards, $itemInfo);
		}
		$activity->rewards = $rewards;
	}

	$activity->details = $json->Response->data->activity;
	return $resWithExpires->withJson($activity);
});

$app->get('/elderchallenge/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$activity = $activities->elderchallenge;

	$identifier = $activity->identifier;
	$hash = $activity->display->activityHash;
	$json = getActivity($hash);
	$bosses = $activity->activityTiers[0]->extended->rounds;
	$bossInfo = [];
	for($i = 0, $c = count($bosses); $i < $c; $i++) {
		$boss = $bosses[$i];
		$binfo = getBoss($boss->bossCombatantHash);
		array_push($bossInfo, $binfo);
	}
  $bounties = [];
  for($i = 0, $c = count($activity->bountyHashes); $i < $c; $i++){
    $newBt = new \stdClass;
    $newBta = getItemDetail($activity->bountyHashes[$i]);
    $newBt->details = getBounty($activity->bountyHashes[$i], $platform, $username, $character_id);
    array_push($bounties, $newBt);
  }
  $activity->bounties = $bounties;

	$objectives = [];
	for($i = 0, $c = count($activity->extended->objectives); $i< $c; $i++){
		$objective = $activity->extended->objectives[$i];
		$objInfo = objectivesDefinition($objective->objectiveHash);
		$objInfo->progress = $objective->progress;
		array_push($objectives, $objInfo);
	}
	$activity->objectives = $objectives;
	$activity->bosses = $bossInfo;

	$activity->details = $json->Response->data->activity;

	return $resWithExpires->withJson($activity);
});

$app->get('/nightbot/nightfall', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);
	$platform = "2";
	$username = "tkrp1986";
	$character_id = "2305843009271058982";
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;


  $activity = new \stdClass;
	$activity = $activities->nightfall;
	$hash = $activity->display->activityHash;
	$json = getActivity($hash);

	$activity->details = $json->Response->data->activity;

	$result->nightfall = $activity;
	$modifiers = "";
	for($i = 0, $c = count($activity->extended->skullCategories[0]->skulls); $i < $c; $i++) {
		$modifiers .= $activity->extended->skullCategories[0]->skulls[$i]->displayName.", ";
	}
	$modifiers = rtrim($modifiers, ", ");

	$res = "O Anoitecer dessa semana é: ".$activity->details->activityName.', com os seguintes modificadores: '.$modifiers.'.';

	$body = $response->getBody();
	$body->write($res);
	return $resWithExpires;
});

$app->get('/nightbot/elderchallenge', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = "2";
	$username = "tkrp1986";
	$character_id = "2305843009271058982";
	$activities = curl($platform, $username, $character_id);

  $activity = $activities->elderchallenge;

	$identifier = $activity->identifier;
	$hash = $activity->display->activityHash;
	$json = getActivity($hash);
	$bosses = $activity->activityTiers[0]->extended->rounds;
	$bossInfo = [];
	for($i = 0, $c = count($bosses); $i < $c; $i++) {
		$boss = $bosses[$i];
		$binfo = getBoss($boss->bossCombatantHash);
		array_push($bossInfo, $binfo);
	}

	$activity->bosses = $bossInfo;

	$modifiers = "";
	for($i = 0, $c = count($activity->extended->skullCategories[0]->skulls); $i < $c; $i++) {
		$modifiers .= $activity->extended->skullCategories[0]->skulls[$i]->displayName.", ";
	}
	$modifiers = rtrim($modifiers, ", ");

	$bonus = "";
	for($i = 0, $c = count($activity->extended->skullCategories[1]->skulls); $i < $c; $i++) {
		$bonus .= $activity->extended->skullCategories[1]->skulls[$i]->displayName.", ";
	}
	$bonus = rtrim($bonus, ", ");

	$bosses = "";
	for($i = 0, $c = count($activity->bosses); $i < $c; $i++) {
		$bosses .= $activity->bosses[$i]->combatantName.", ";
	}
	$bosses = rtrim($bosses, ", ");

	$activity->details = $json->Response->data->activity;
	$res = "Desafio dos Anciões da semana tem os seguintes modificadores: ".$modifiers.", e bônus: ".$bonus.", você irá enfrentar os seguintes bosses: ".$bosses.".";
	$body = $response->getBody();
	$body->write($res);
	return $resWithExpires;
});

$app->get('/nightbot/trials', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = "2";
	$username = "tkrp1986";
	$character_id = "2305843009271058982";
	$activities = curl($platform, $username, $character_id);
  $activities = curl($platform, $username, $character_id);

    $activity = new \stdClass;
    $activity = $activities->trials;
    $hash = $activity->display->activityHash;
    $json = getActivity($hash);

    $trials = $json->Response->data->activity;

    if ($activity->status->active) {
      $res = "Os Desafios de Osíris, o mapa dessa semana é: ".$activity->display->flavor.", no ".$trials->activityDescription.".";
    } else {
      $res = "Os Desafios de Osíris ainda não estão abertos.";
    }

  $body = $response->getBody();
	$body->write($res);
	return $resWithExpires;
});

$app->get('/manifest', function ($request, $response, $args) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'http://www.bungie.net/platform/Destiny/Manifest/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$url = 'http://bungie.net'.$json->Response->mobileWorldContentPaths->{"pt-br"};
	$file = file_get_contents($url);
	file_put_contents('./cache/file.zip', $file);
	$zip = new ZipArchive;
	$res = $zip->open('./cache/file.zip');
	if ($res === TRUE) {
		$name = $zip->statIndex(0)['name'];
		$zip->extractTo('./cache');
		$zip->close();
		rename('./cache/'.$name, './cache/db.content');
		return "foi";
	}else {
		print_r($res);
		return "erro";
	}
	// return $response->withJson($json);
});

function getActivity($hash) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';
	$nf = curl_init();

	$url = 'http://www.bungie.net/platform/Destiny/Manifest/Activity/'.$hash.'/?lc=pt-br&definitions=true';

	curl_setopt($nf, CURLOPT_URL, $url);
	curl_setopt($nf, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($nf, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($nf));
	return $json;
}

function getXur() {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/Platform/Destiny/Advisors/Xur/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	return $json->Response->data;
}

function getItemDetail($hash){
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/'.$hash.'/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	return $json->Response->data->inventoryItem;
}

function getBoss($id){
	global $container;
	$id = sprintf('%u', $id & 0xFFFFFFFF);
	$stmt = $container->db->query('SELECT * from DestinyCombatantDefinition WHERE id='.$id);
	$all = $stmt->fetchAll();
	return json_decode($all[0]['json']);
}

function classDefinition($id){
	global $container;
	$stmt = $container->db->query('SELECT * from DestinyClassDefinition');
	$all = $stmt->fetchAll();
	$result = new \stdClass;
	for($i = 0, $c = count($all); $i < $c; $i++) {
		$json = json_decode($all[$i]['json']);
		if($json->classHash == $id) {
			$result = $json;
		}
	}
	return $result;
}

function genderDefinition($id){
	global $container;
	$stmt = $container->db->query('SELECT * from DestinyGenderDefinition');
	$all = $stmt->fetchAll();
	$result = new \stdClass;
	for($i = 0, $c = count($all); $i < $c; $i++) {
		$json = json_decode($all[$i]['json']);
		if($json->genderHash == $id) {
			$result = $json;
		}
	}
	return $result;
}

function raceDefinition($id){
	global $container;
	$stmt = $container->db->query('SELECT * from DestinyRaceDefinition');
	$all = $stmt->fetchAll();
	$result = new \stdClass;
	for($i = 0, $c = count($all); $i < $c; $i++) {
		$json = json_decode($all[$i]['json']);
		if($json->raceHash == $id) {
			$result = $json;
		}
	}
	return $result;
}

function objectivesDefinition($id){
	global $container;
	$stmt = $container->db->query('SELECT * from DestinyObjectiveDefinition');
	$all = $stmt->fetchAll();
	$result = new \stdClass;
	for($i = 0, $c = count($all); $i < $c; $i++) {
		$json = json_decode($all[$i]['json']);
		if($json->objectiveHash == $id) {
			$result = $json;
		}
	}
	return $result;
}

function progressionDefinition($id){
	global $container;
	$stmt = $container->db->query('SELECT * from DestinyProgressionDefinition');
	$all = $stmt->fetchAll();
	$result = new \stdClass;
	for($i = 0, $c = count($all); $i < $c; $i++) {
		$json = json_decode($all[$i]['json']);
		if($json->progressionHash == $id) {
			$result = $json;
		}
	}
	return $result;
}
function getProgression($progressionHash, $platform, $username, $character_id){
  $progression = curlProgression($platform, $username, $character_id);
  $result = new \stdClass;
  foreach($progression as $key => $pg){
    if($pg->progressionHash == $progressionHash){
      $result = $pg;
    }
  }
  return $result;
}

function getBounty($questHash, $platform, $username, $character_id){
  $bounties = curlBounties($platform, $username, $character_id);
  $result = new \stdClass;
  foreach($bounties as $key => $bt){
    if($bt->questHash == $questHash){
      $result = $bt;
    }
  }
  return $result;
}

// Run app
$app->run();
