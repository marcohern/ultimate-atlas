<?php
//CRON ImportDaily

require_once('config.php');

$db = new mysqli(MRC_DB_HOST, MRC_DB_USER, MRC_DB_PASSWORD, MRC_DB_DATABASE, MRC_DB_PORT);

if ($db->connect_error) {
	die("Error conecting: (" .$db->connect_errno.") ".$db->connect_error);
}

echo "CALLING import_daily_day...";
$r = $db->query('CALL import_daily_day()');

if ($r) {
	echo "Success! {$r->num_rows}";
} else {
	die("Error calling procedure: ".$db->error);
}