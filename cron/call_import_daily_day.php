<?php
//CRON ImportDaily

$db = new mysqli('marcohern.com', 'marcoher_daily','K9Q6mk,BFiwq','marcoher_daily');

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