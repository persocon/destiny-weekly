<?php
require 'vendor/autoload.php';
// Create and configure Slim app
$config = [
	'settings' => [
        'displayErrorDetails' => true
    ],
];

$app = new \Slim\App();

// $corsOptions = array(
//     "origin" => "*",
//     "exposeHeaders" => array("Content-Type", "X-Requested-With", "X-authentication", "X-client"),
//     "allowMethods" => array('GET')
// );
// $cors = new \CorsSlim\CorsSlim($corsOptions);

// $whitelist = array(
//     '127.0.0.1',
//     '::1'
// );
//
// if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
//     // not valid
//     $app->add(new \CorsSlim\CorsSlim());
// }


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
        for($i = 0, $c = count($character_list); $i < $c; $i++) {
          $character_list[$i]->emblemPath = 'http://bungie.net'.$character_list[$i]->emblemPath;
          $character_list[$i]->backgroundPath = 'http://bungie.net'.$character_list[$i]->backgroundPath;
          if($character_list[$i]->genderDetails->genderName == "Masculino") {
            $className = $character_list[$i]->classDetails->classNameMale;
            $raceName = $character_list[$i]->raceDetails->raceNameMale;
          } else {
            $className = $character_list[$i]->classDetails->classNameFemale;
            $raceName = $character_list[$i]->raceDetails->raceNameFemale;
          }
          $character_list[$i]->classDetails->className = $className;
          $character_list[$i]->raceDetails->raceName = $raceName;
        }

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
  $raid = [];
  $crucible = [];
  $vanguard = [];
  $judgment_house = [];
	foreach($activities as $key => $activity){
		$identifier = $activity->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($active == 1 && $identifier != 'armsday' && $identifier != 'prisonofelders-playlist'){
			$activity->display->identifier = $identifier;
      $ac = new \stdClass;
      $ac->value = $activity->display->identifier;
      $ac->title = $activity->display->advisorTypeCategory;
      if($identifier == 'wrathofthemachine' || $identifier == 'kingsfall' || $identifier == 'vaultofglass' || $identifier == 'crota') {
        array_push($raid, $ac);
      }
      if($identifier == 'trials' || $identifier == 'weeklycrucible' || $identifier == 'dailycrucible' || $identifier == 'ironbanner') {
        array_push($crucible, $ac);
      }
      if($identifier == 'elderchallenge') {
        array_push($judgment_house, $ac);
      }

      if($identifier == 'nightfall' || $identifier == 'heroicstrike' || $identifier == 'dailychapter' || $identifier == 'xur') {
        array_push($vanguard, $ac);
      }
		}
	}
  $vanvan = new \stdClass;
  $vanvan->title = "Atividades da Vanguarda";
  $vanvan->activities = $vanguard;
  array_push($selectActivity, $vanvan);

  $crisol = new \stdClass;
  $crisol->title = "Atividades do Crisol";
  $crisol->activities = $crucible;
  array_push($selectActivity, $crisol);

  $julgamento = new \stdClass;
  $julgamento->title = "Atividades da Casa do Julgamento";
  $julgamento->activities = $judgment_house;
  array_push($selectActivity, $julgamento);

  $raidizinha = new \stdClass;
  $raidizinha->title = "RAIDS";
  $raidizinha->activities = $raid;
  array_push($selectActivity, $raidizinha);

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

  $rs = cleanApi($activity, $username, $platform, $character_id);

	return $resWithExpires->withJson($rs);
});

$app->get('/kingsfall/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);
	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$activity = new \stdClass;
	$activity = $activities->kingsfall;

  $rs = cleanApi($activity, $username, $platform, $character_id);

	return $resWithExpires->withJson($rs);
});

$app->get('/wrathofthemachine/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);
	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$activity = new \stdClass;
	$activity = $activities->wrathofthemachine;

  $rs = cleanApi($activity, $username, $platform, $character_id);

	return $resWithExpires->withJson($rs);
});

$app->get('/crota/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);
	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$activity = new \stdClass;
	$activity = $activities->crota;

  $rs = cleanApi($activity, $username, $platform, $character_id);

	return $resWithExpires->withJson($rs);
});

$app->get('/vaultofglass/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);
	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$activity = new \stdClass;
	$activity = $activities->vaultofglass;

  $rs = cleanApi($activity, $username, $platform, $character_id);

	return $resWithExpires->withJson($rs);
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

  $rs = cleanApi($activity, $username, $platform, $character_id);

	return $resWithExpires->withJson($rs);
});

$app->get('/trials/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

    $activity = new \stdClass;
  	$activity = $activities->trials;

    $rs = cleanApi($activity, $username, $platform, $character_id);

	return $resWithExpires->withJson($rs);
});

$app->get('/ironbanner/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$activity = new \stdClass;
	$activity = $activities->ironbanner;

  $rs = cleanApi($activity, $username, $platform, $character_id);


	return $resWithExpires->withJson($rs);
});

$app->get('/heroicstrike/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$activity = $activities->heroicstrike;

  $rs = cleanApi($activity, $username, $platform, $character_id);


	return $resWithExpires->withJson($rs);
});

$app->get('/dailychapter/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$activity = $activities->dailychapter;

  $rs = cleanApi($activity, $username, $platform, $character_id);

	return $resWithExpires->withJson($rs);
});

$app->get('/dailycrucible/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$activity = $activities->dailycrucible;

  $rs = cleanApi($activity, $username, $platform, $character_id);
	return $resWithExpires->withJson($rs);
});

$app->get('/weeklycrucible/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$activity = $activities->weeklycrucible;
  $rs = cleanApi($activity, $username, $platform, $character_id);
	return $resWithExpires->withJson($rs);
});

$app->get('/elderchallenge/{platform}/{username}/{character_id}', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = $request->getAttribute('platform');
	$username = $request->getAttribute('username');
	$character_id = $request->getAttribute('character_id');
	$activities = curl($platform, $username, $character_id);

	$result = new \stdClass;

	$activity = $activities->elderchallenge;

  $rs = cleanApi($activity, $username, $platform, $character_id);

	return $resWithExpires->withJson($rs);
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

$app->get('/nightbot/xur', function ($request, $response, $args) {
	$resWithExpires = $this->cache->withExpires($response, time() + 3600);

	$platform = "2";
	$username = "tkrp1986";
	$character_id = "2305843009271058982";
	$activities = curl($platform, $username, $character_id);

  $activity = $activities->xur;

  if ($activity->status->active) {
    $getXur = getXur();
    $xurItems = "";
    $items = [];
    $saleItemCategories = array_reverse($getXur->saleItemCategories);
    for($index = 0, $count = count($saleItemCategories[0]->saleItems); $index < $count; $index++){
        $item = getItemDetail($saleItemCategories[0]->saleItems[$index]->item->itemHash);
        $xurItems .=  $item->title.", ";
    }
    $bosses = rtrim($xurItems, ", ");
    $res = "Xur chegou, e está vendendo: ".$xurItems;
  } else {
    $res = "Xur ainda não chegou.";
  }

  $body = $response->getBody();
	$body->write($res);
	return $resWithExpires;
});

$app->get('/manifest', function ($request, $response, $args) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/Manifest/?lc=pt-br&definitions=true');
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

	$url = 'https://www.bungie.net/platform/Destiny/Manifest/Activity/'.$hash.'/?lc=pt-br&definitions=true';

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
  $res = new \stdClass;
  $inventory = $json->Response->data->inventoryItem;
  if(array_key_exists('itemName', $inventory)) {
    $res->title = $inventory->itemName;
  } else {
    $res->title = '';
  }
  if(array_key_exists('itemDescription', $inventory)) {
    $res->description = $inventory->itemDescription;
  } else {
    $res->description = '';
  }
  if(array_key_exists('icon', $inventory)) {
    $res->icon = 'http://bungie.net'.$inventory->icon;
  } else {
    $res->icon = '';
  }
	return $res;
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

function cleanApi($activity, $username, $platform, $character_id) {
  $result = new \stdClass;
  if (array_key_exists('identifier', $activity)) {
    $result->identifier = $activity->identifier;
  } else {
    $result->identifier = '';
  }

  if (array_key_exists('advisorTypeCategory', $activity->display)) {
    $result->title = $activity->display->advisorTypeCategory;
  } else {
    $result->title = '';
  }

  if (array_key_exists('activityHash', $activity->display)) {
    $hash = $activity->display->activityHash;
  	$json = getActivity($hash);
    $details = $json->Response->data->activity;

    $result->name = $details->activityName;
    $result->desc = $details->activityDescription;
  } else {
    if($activity->identifier === 'xur'){
      $result->name = 'Items a venda';
    } else {
      $result->name = '';
    }
    $result->desc = '';
  }

  if (array_key_exists('completion', $activity)){
    $result->completed = $activity->completion->complete;
  } else {
    $result->completed = '';
  }

  if (array_key_exists('image', $activity->display)) {
    $result->backgroundImg = 'http://bungie.net'.$activity->display->image;
  } else {
    $result->backgroundImg = '';
  }

  if (array_key_exists('icon', $activity->display)) {
      $result->icon = 'http://bungie.net'.$activity->display->icon;
  } else {
    $result->icon = '';
  }

  if (array_key_exists('extended', $activity) && array_key_exists('skullCategories', $activity->extended)) {
    $result->modifiers = [];
    for ($i = 0, $c = count($activity->extended->skullCategories); $i < $c; $i++) {
      $obj = new \stdClass;
      $obj->title = $activity->extended->skullCategories[$i]->title;
      $obj->skulls = [];
        for($j = 0, $ci = count($activity->extended->skullCategories[$i]->skulls); $j < $ci; $j++) {
          $skull = new \stdClass;
          $skull->title = $activity->extended->skullCategories[$i]->skulls[$j]->displayName;
          $skull->description = $activity->extended->skullCategories[$i]->skulls[$j]->description;
          $skull->icon = 'http://bungie.net'.$activity->extended->skullCategories[$i]->skulls[$j]->icon;
          array_push($obj->skulls, $skull);
        }
      array_push($result->modifiers, $obj);
    }

  } else {
    $result->modifiers = [];
  }

  if(array_key_exists('activityTiers', $activity) && array_key_exists('extended', $activity->activityTiers[0]) && array_key_exists('rounds', $activity->activityTiers[0]->extended)) {
    $bosses = $activity->activityTiers[0]->extended->rounds;
  	$bossInfo = [];
  	for($i = 0, $c = count($bosses); $i < $c; $i++) {
  		$boss = $bosses[$i];
  		$binfo = getBoss($boss->bossCombatantHash);
      $b = new \stdClass;
      $b->title = $binfo->combatantName;
      $b->description = $binfo->description;
      $b->icon = $binfo->icon;
      $b->image = 'http://bungie.net'.$binfo->image;
  		array_push($bossInfo, $b);
  	}
    $result->bosses = $bossInfo;
  } else {
    $result->bosses = [];
  }

  if (array_key_exists('activityTiers', $activity) && array_key_exists('rewards', $activity->activityTiers[0]) ) {
		$heroicRewards = $activity->activityTiers[0]->rewards;
		$rewards = [];
		for($i = 0, $c = count($heroicRewards); $i < $c; $i++) {
			$rew = $heroicRewards[$i]->rewardItems[0];
			$itemInfo = getItemDetail($rew->itemHash);
			array_push($rewards, $itemInfo);
		}
		$result->rewards = $rewards;
	} else {
    $result->rewards = [];
  }
  if ($activity->identifier === 'xur') {
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

  	$result->items = $xurItems;
  } else {
    $result->items = [];
  }
  if(array_key_exists('bountyHashes', $activity)){
    $bounties = [];
    for($i = 0, $c = count($activity->bountyHashes); $i < $c; $i++){
      $newBt = new \stdClass;
      $newBt = getItemDetail($activity->bountyHashes[$i]);
      $newBt->details = getBounty($activity->bountyHashes[$i], $platform, $username, $character_id);
      array_push($bounties, $newBt);
    }
    $result->bounties = $bounties;
  } elseif ($activity->identifier === 'ironbanner'){
    if(array_key_exists('vendors', $activity)){
  		$ibItems = $activity->vendors[0]->saleItemCategories[1]->saleItems;
  		$items = [];
  		for($i = 0, $c = count($ibItems); $i < $c; $i++) {
  			$item = $ibItems[$i];
  			$itemInfo = getItemDetail($item->item->itemHash);
  			array_push($items, $itemInfo);
  		}
  		$result->bounties = $items;
  	} else {
      $result->bounties = [];
    }
  } else {
    $result->bounties = [];
  }
  if (array_key_exists('extended', $activity) && array_key_exists('objectives', $activity->extended)) {
    $objectives = [];
  	for($i = 0, $c = count($activity->extended->objectives); $i< $c; $i++){
  		$objective = $activity->extended->objectives[$i];
  		$objInfo = objectivesDefinition($objective->objectiveHash);
  		$objInfo->progress = $objective->progress;
  		array_push($objectives, $objInfo);
  	}
  	$result->objectives = $objectives;
  } else {
    $result->objectives = [];
  }
  if (array_key_exists('progressionHash', $activity)) {
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
      $result->progress = $activity->progress;
  	} else {
      $result->progress = [];
    }
  } else {
    $result->progress = [];
  }

  if($result->identifier == "wrathofthemachine" || $result->identifier == "kingsfall" || $result->identifier == 'vaultofglass' || $result->identifier == 'crota') {
    $result->raid = [];
    if(array_key_exists('activityTiers', $activity)) {
      for($i = 0, $c = count($activity->activityTiers); $i < $c; $i++){
        $obj = new \stdClass;
        $obj->title = $activity->activityTiers[$i]->tierDisplayName;
        $obj->completion = $activity->activityTiers[$i]->completion;
        $obj->steps = $activity->activityTiers[$i]->steps;
        $obj->modifiers = [];
        if(array_key_exists('skullCategories', $activity->activityTiers[$i])) {
          for($j = 0, $x = count($activity->activityTiers[$i]->skullCategories); $j < $x; $j++){
            $xpto = new \stdClass;
            $xpto->title = $activity->activityTiers[$i]->skullCategories[$j]->title;
            $xpto->skulls = [];
            if(array_key_exists('skulls', $activity->activityTiers[$i]->skullCategories[$j])) {
              for($z = 0, $s = count($activity->activityTiers[$i]->skullCategories[$j]->skulls); $z < $s; $z++){
                $sk = new \stdClass;
                $sk->title = $activity->activityTiers[$i]->skullCategories[$j]->skulls[$z]->displayName;
                $sk->description = $activity->activityTiers[$i]->skullCategories[$j]->skulls[$z]->description;
                $sk->icon = 'http://bungie.net'.$activity->activityTiers[$i]->skullCategories[$j]->skulls[$z]->icon;
                array_push($xpto->skulls, $sk);
              }
            }
            array_push($obj->modifiers, $xpto);
          }
        }
        array_push($result->raid, $obj);
      }
    } else {
      $result->raid = [];
    }
  } else {
    $result->raid = [];
  }

  return $result;
}

// Run app
$app->run();
