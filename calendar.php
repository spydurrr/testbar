<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>

<style>
#calendar {
	width:47px;
	height:59px;
	color:#000;
	overflow:hidden;
	text-align:center;
	position:absolute;
	top:3px;
	right:15px;
	font-family:Arial, Verdana;
	background-color: #FFF;
}
#calendar_month { height:21px; line-height:23px; color:#000; text-transform:uppercase; }
#calendar_day { font-size:23px; line-height:18px; font-weight:bold; padding:2px 0 1px; }
.rounded-corners {
     -moz-border-radius: 12px;
    -webkit-border-radius: 12px;
    -khtml-border-radius: 12px;
    border-radius: 12px;
}
</style>

</head>

<body>

<?php
date_default_timezone_set('America/New_York');
 $day = date('j');
 $month = date('M');
 $year = date('Y');
 ?>
 
<div id="calendar" class="rounded-corners">

							<div id="calendar_month"><?php echo "$month" ?></div>

							<div id="calendar_day"><?php echo "$day" ?></div>

							<div id="calendar_year"><?php echo "$year" ?></div>

						</div>

</body>
</html>
