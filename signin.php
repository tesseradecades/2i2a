<html>
      <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="description" content="">
            <meta name="author" content="">
            <link rel="icon" href="https://getbootstrap.com/favicon.ico">

            <title>2I2A Sign-In Page</title>

            <!-- Bootstrap core CSS -->
            <link href="https://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">

            <!-- Custom styles for this template -->
            <link href="https://getbootstrap.com/docs/4.1/examples/sign-in/signin.css" rel="stylesheet">
      </head>

   <body>
      <?php
      // Start the session
      session_start();
      ?>            
      <div class = "container">
            <form class = "form-signin" role = "form" 
                  action = "index.php" method = "post">
                  <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
                  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                  <label for="username" class="sr-only">Username</label>
                  <input type="text" id="inputUsername" name="username" class="form-control" placeholder="Username" required autofocus>
                  <label for="inputPassword" class="sr-only">Password</label>
                  <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required>
                  <div class="checkbox mb-3">
                  </div>
                  <button class="btn btn-lg btn-primary btn-block" type="submit" name="login">Login</button>
                  Click here to clean <a href = "clearsessions.php" title = "Logout">Session.</a>   
            </form>
            <div>
         
                  <?php
                              $msg = '';
                              
                              if (isset($_POST['login']) && !empty($_POST['username']) 
                              && !empty($_POST['password'])) {
                                          
                              if ( $_POST['password'] == '1234') { // only check for a password of 1234
                                    $_SESSION['username'] = $_POST['username'];
                              ?>
                                    <lead>You have entered valid use name and password</lead>
                  <?php
                              }else {
                                    $msg = 'Wrong username or password';
                              }
                              }
                        ?>
                  </div> <!-- /container -->
                  </br>
                  <p>
                        <b>Login:</b> <i>You can enter whatever you want</i> <br>
                        <b>Password:</b> 1234
                  <p/>
            </div>
      
      

   </body>
</html>