<?php
require 'vendor/autoload.php';
// Create and configure Slim app
$config = [
	'settings' => [
        'displayErrorDetails' => true
    ],
];

$app = new \Slim\App($config);
$app->add(new \Slim\HttpCache\Cache('public', 86400));

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

$container['curl'] = function(){
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/2/Account/4611686018446056021/Character/2305843009345804418/Advisors/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->activities;

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

$app->get('/selectActivity', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$activities = $this->curl;

	$result = new \stdClass;

	$selectActivity = [];
	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($active == 1 &&  $identifier != 'thetakenking' && $identifier != 'vaultofglass' && $identifier != 'crota' && $identifier != 'armsday'){
			array_push($selectActivity, $activity->display);
		}
	}
	$result->selectActivity = $selectActivity;
	return $resWithExpires->withJson($result->selectActivity);
});

$app->get('/nightfall', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);
	$activities = $this->curl;

	$result = new \stdClass;


	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "nightfall"){
			if($active==1){
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
				$result->xur = $activity;

				$result->nightfall = $activity;

			}else {
				$result->nightfall = 0;
			}
		}

	}
	return $resWithExpires->withJson($result->nightfall);
});

$app->get('/xur', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$activities = $this->curl;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "xur"){
			if($active == 1){
				$xurItems = $activity->vendors[0]->saleItemCategories[2]->saleItems;
				$items = [];
				for($i = 0, $c = count($xurItems); $i < $c; $i++) {
					$item = $xurItems[$i];
					$itemInfo = getItemDetail($item->item->itemHash);
					array_push($items, $itemInfo);
				}
				$activity->items = $items;
				$result->xur = $activity;
			}else {
				$result->xur = 0;
			}
		}

	}
	return $resWithExpires->withJson($result->xur);
});

$app->get('/trials', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$activities = $this->curl;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "trials"){
			if($active == 1){
				$hash = $activity->display->activityHash;
				$json = getActivity($hash);

				$activity->details = $json->Response->data->activity;
				$activity->display->image = $activity->details->pgcrImage;

				$ibItems = $activity->vendors[0]->saleItemCategories[0]->saleItems;
				$items = [];
				for($i = 0, $c = count($ibItems); $i < $c; $i++) {
					$item = $ibItems[$i];
					$itemInfo = getItemDetail($item->item->itemHash);
					array_push($items, $itemInfo);
				}
				$activity->bounties = $items;


				$result->trials = $activity;


			}else{
				$result->trials = 0;
			}
		}

	}
	return $resWithExpires->withJson($result->trials);
});

$app->get('/ironbanner', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$activities = $this->curl;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "ironbanner"){
			if($active==1){
				$ibItems = $activity->vendors[0]->saleItemCategories[1]->saleItems;
				$items = [];
				for($i = 0, $c = count($ibItems); $i < $c; $i++) {
					$item = $ibItems[$i];
					$itemInfo = getItemDetail($item->item->itemHash);
					array_push($items, $itemInfo);
				}
				$activity->bounties = $items; // it's getting just the hunter class items :(

				$result->ironbanner = $activity;

			}else {
				$result->ironbanner = 0;
			}
		}

	}
	return $resWithExpires->withJson($result->ironbanner);
});

$app->get('/heroicstrike', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$activities = $this->curl;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "heroicstrike"){
			if($active == 1){
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

				$result->heroicstrike = $activity;
			}else{
				$result->heroicstrike = 0;
			}
		}

	}
	return $resWithExpires->withJson($result->heroicstrike);
});

$app->get('/dailychapter', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$activities = $this->curl;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "dailychapter"){
			if($active == 1) {
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

				$result->dailychapter = $activity;
			}else {
				$result->dailychapter = 0;
			}
		}

	}
	return $resWithExpires->withJson($result->dailychapter);
});

$app->get('/dailycrucible', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$activities = $this->curl;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "dailycrucible"){
			if($active == 1) {
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
				$result->dailycrucible = $activity;
			}else{
				$result->dailycrucible = 0;
			}
		}

	}
	return $resWithExpires->withJson($result->dailycrucible);
});

$app->get('/weeklycrucible', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$activities = $this->curl;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "weeklycrucible"){
			if($active == 1){
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
				$result->weeklycrucible = $activity;
			}else{
				$result->weeklycrucible = 0;
			}
		}

	}
	return $resWithExpires->withJson($result->weeklycrucible);
});

$app->get('/elderchallenge', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$activities = $this->curl;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "elderchallenge"){
			if($active == 1){
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

				$activity->details = $json->Response->data->activity;
				$result->elderchallenge = $activity;
			}else{
				$result->elderchallenge = 0;
			}
		}

	}

	return $resWithExpires->withJson($result->elderchallenge);
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

// Run app
$app->run();
