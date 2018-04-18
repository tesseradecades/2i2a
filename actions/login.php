<?php
    session_start();
    if (isset($_POST['login']) && !empty($_POST['username']) && !empty($_POST['password'])){
        if ( $_POST['password'] == '1234') { // only check for a password of 1234
            $_SESSION['username'] = $_POST['username'];
        }
    }
?>
<script>
    window.location.replace("index.php");
</script>