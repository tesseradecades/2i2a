<?php
// Start the session
session_start();
$name = $_SESSION["name"];
?>
<!DOCTYPE html>
<html>
	<head>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<!--<link rel="stylesheet" href="../sportsFeed.css">
		<script src="../sportsFeed.js"></script>-->
	</head>
	<body>

	<?php
	// Read the sessions
	if (isset($_POST['login']) && !empty($_POST['username']) && !empty($_POST['password'])) {
		if ( $_POST['password'] == '1234') { // only check for a password of 1234
			$_SESSION['username'] = $_POST['username'];
		}
	}
	if ($_SESSION["username"] != "") {
		echo "<br>Hello ";
		echo $_SESSION["username"];
	?>

	<div id="lastVisit"></div>

	<div id="header">
		<img id="logo" /><h1>Poker News</h1>
	</div>

	<table>
		<tr>
			<div id="content">
				<p>No data has been loaded.</p>
			</div>
		</tr>
	</table>
	

	<br /><br />
	<a href="logout.php">Clear Sessions</a>

	<?php  
	}else{
	?>
    <script>
        window.location.replace("index.php");
    </script>
	<!--<h1>You are not a valid user</h1>
	Police are coming
	<img src="http://66.media.tumblr.com/tumblr_lne9okrwkN1qdvbl3o1_500.jpg"> <br />-->




		<?php
	}
	?>
	</body>
</html>