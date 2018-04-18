<?php
    session_start();
    if(/*logged in*/ $_SESSION["username"] != ""){
        ?>
        <script>
            window.location.replace("feed.php");
        </script>
        <?php
    }else/*not logged in*/{
        ?>
        <script>
            window.location.replace("signin.php");
        </script>
        <?php
    }
?>