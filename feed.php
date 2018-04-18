<?php
    session_start();

    if(/*logged in*/$_SESSION["username"] != ""){
        ?>
        
<html>
    <head>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<link rel="stylesheet" href="css/sportsFeed.css">
		<script src="javascript/sportsFeed.js"></script>
    </head>
    <body>
        <div id="header">
            <img id="logo" /><h1>NFL News</h1>
        </div>
        <div id="content">
            <p>No data has been loaded.</p>
        </div>
    </body>
</html>

        <?php
    }else/**/{
        ?>
            <script>
                window.location.replace("actions/logout.php");
            </script>
        <?php
    }
?>