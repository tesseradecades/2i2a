<?php
    session_start();
    if (!empty($_POST['username']) && !empty($_POST['password'])){
        if ( $_POST['password'] == '1234') { // only check for a password of 1234
            $_SESSION['username'] = $_POST['username'];
        }
    }
?>
<script>
    window.location.replace("../feed.php");
</script>