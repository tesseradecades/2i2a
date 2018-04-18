<?php
    session_start();

    if(/*logged in*/){
        
    }else/**/{
        ?>
            <script>
                window.location.replace("clearsessions.php");
            </script>
        <?php
    }
?>