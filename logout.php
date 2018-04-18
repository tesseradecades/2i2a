<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<body>


<!--<h3>Sessions are cleared</h3>-->

<?php
// Set session variables
$_SESSION["username"] = "";
$_SESSION["name"] = "";
?>

<script>
    window.location.replace("index.php");
</script>

<!--<a href="index.php">Landing Page</a>-->


</body>
</html>