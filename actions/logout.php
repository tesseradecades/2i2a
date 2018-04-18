<?php
// Start the session
session_start();
// Set session variables
$_SESSION["username"] = "";
?>

<script>
    window.location.replace("index.php");
</script>
