<?php
require 'vendor/autoload.php';
// Create and configure Slim app
$config = [
	'settings' => [
        'displayErrorDetails' => true
    ],
];

$app = new \Slim\App($config);

$container = $app->getContainer();
$container['view'] = function ($container) {
    return new \Slim\Views\PhpRenderer('templates/');
};

// Define app routes
$app->get('/nightfall', function ($request, $response, $args) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/2/Account/4611686018446056021/Character/2305843009345804418/Advisors/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->activities;

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

				$result->nightfall = $activity;

			}else {
				$result->nightfall = 0;	
			}
		}

	}
	return $response->withJson($result);
});

$app->get('/xur', function ($request, $response, $args) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/2/Account/4611686018446056021/Character/2305843009345804418/Advisors/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->activities;

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
	return $response->withJson($result);
});

$app->get('/trials', function ($request, $response, $args) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/2/Account/4611686018446056021/Character/2305843009345804418/Advisors/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->activities;

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
				$result->trials = $activity;
			}else{
				$result->trials = 0;
			}
		}

	}
	return $response->withJson($result);
});

$app->get('/heroicstrike', function ($request, $response, $args) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/2/Account/4611686018446056021/Character/2305843009345804418/Advisors/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->activities;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "heroicstrike"){
			if($active == 1){
				$result->heroicstrike = $activity;
			}else{
				$result->heroicstrike = 0;
			}
		}

	}
	return $response->withJson($result);
});

$app->get('/dailychapter', function ($request, $response, $args) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/2/Account/4611686018446056021/Character/2305843009345804418/Advisors/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->activities;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "dailychapter"){
			if($active == 1) {
				$result->dailychapter = $activity;
			}else {
				$result->dailychapter = 0;
			}
		}

	}
	return $response->withJson($result);
});

$app->get('/dailycrucible', function ($request, $response, $args) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/2/Account/4611686018446056021/Character/2305843009345804418/Advisors/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->activities;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "dailycrucible"){
			if($active == 1) {
				$result->dailycrucible = $activity;
			}else{
				$result->dailycrucible = 0;
			}
		}

	}
	return $response->withJson($result);
});

$app->get('/weeklycrucible', function ($request, $response, $args) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/2/Account/4611686018446056021/Character/2305843009345804418/Advisors/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->activities;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "weeklycrucible"){
			if($active == 1){
				$result->weeklycrucible = $activity;
			}else{
				$result->weeklycrucible = 0;
			}
		}

	}
	return $response->withJson($result);
});

$app->get('/elderchallenge', function ($request, $response, $args) {
	$apiKey = 'ea047e782f6d43a38bb427de080c5b5a';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, 'https://www.bungie.net/platform/Destiny/2/Account/4611686018446056021/Character/2305843009345804418/Advisors/?lc=pt-br&definitions=true');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-API-Key: ' . $apiKey));

	$json = json_decode(curl_exec($ch));
	$activities = $json->Response->data->activities;

	$result = new \stdClass;

	for($i = 0, $c = count($activities); $i < $c; $i++) {
		$activity = $activities[$i];
		$identifier = $activity->display->identifier;
		$active = ( isset($activity->status->active)&&!empty($activity->status->active) ? 1 : 0 );
		if($identifier == "elderchallenge"){
			if($active == 1){
				$result->elderchallenge = $activity;
			}else{
				$result->elderchallenge = 0;
			}
		}

	}
	return $response->withJson($result);
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

// Run app
$app->run();