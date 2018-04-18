<?php
    session_start();
    if(/*logged in*/ $_SESSION["username"] == ""){
        ?>
            <div class = "container">
                <form class ="actions/login.php" method = "post">
                    <input type = "text" name = "username" required autofocus></br>
                    <input type = "password"  name = "password" required>
                    <button class = "btn btn-lg btn-primary btn-block" type = "submit"  name = "login">Login</button>
                </form>
                    
                Click here to clean <a href = "actions/logout.php" title = "Logout">Session.</a>
                
            </div> 
        <?php
    }else/*not logged in*/{
        ?>
            <script>
                window.location.replace("index.php");
            </script>
        <?php
    }
?>