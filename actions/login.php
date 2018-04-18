<?php
    session_start();
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (!empty($username) && !empty($password)){
        if ( $password == '1234') { // only check for a password of 1234
            $_SESSION['username'] = $username;
        }
    }
?>
<script>
    window.location.replace("../index.php");
</script>