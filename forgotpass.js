<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>


<body class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
    style="background-image:linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.4)), url(pexels-alex-urezkov-12040724.jpg );">


    <div class="gitna w-25 border border-warning rounded-4" style="margin-left:35%; margin-top: 10%; position: relative;">
        <div class="card-body text-center">
            <div class="card-header h5 text-dark bg-warning">Reset Password </div>
            <div class="card-body px-5">
                <p class="card-text py-2">
                    Enter your email address and we'll send you an email with instructions to reset your password.
                </p>
                <div class="form-outline">
                    <input type="email" id="typeEmail" class="form-control my-3" />
                    <label class="form-label" for="typeEmail">Email input</label>
                </div>
                <button type="button" class="btn btn-warning w-100 border" onclick="resetPassword()">Reset password</button>
                <div class="d-flex justify-content-between mt-4">
                    <a href="index.html"><button type="button" class="btn btn-outline-warning btn-sm">Log in</button></a>
                    <a href="registration.html"><button type="button" class="btn btn-outline-warning btn-sm">Register</button></a>
                </div>
            </div>
        </div>
    </div>

    <script src="forgotpass.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
    <script>
        function resetPassword() {
            var email = document.getElementById('typeEmail').value;

            // Perform any necessary validation or checks

            // Send a request to the server to reset the password
            // You can use AJAX or any other method to send the request

            // Example AJAX request
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Password reset successful
                    alert('Password reset instructions sent to your email!');
                } else {
                    // Password reset failed
                    alert('Failed to reset password. Please try again.');
                }
            };
            xhttp.open("GET", "resetpassword.php?email=" + email, true);
            xhttp.send();
        }
   
