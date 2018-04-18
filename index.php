<?php
    session_start();
    var_dump($_SESSION["username"]);
    /*if( $_SESSION["username"] != ""){//logged in
        ?>
        <script>
            window.location.replace("feed.php");
        </script>
        <?php
    }else{//not logged in
        ?>
        <script>
            window.location.replace("signin.php");
        </script>
        <?php
    }*/
?>