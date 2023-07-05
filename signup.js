<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <script src="signup.js"></script>
</head>

<body>
    

    <script>
        // JavaScript code goes here

        // Example: Alert a message when the form is submitted
        document.querySelector('form').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            // Get the values entered by the user
            const nameInput = document.querySelector('#floatingInputName').value;
            const emailInput = document.querySelector('#floatingInputEmail').value;
            const passwordInput = document.querySelector('#floatingPassword').value;

            // Validate the inputs (example validation, you can modify it according to your requirements)
            if (nameInput.trim() === '') {
                alert('Please enter your name.');
                return;
            }

            if (emailInput.trim() === '') {
                alert('Please enter your email address.');
                return;
            }

            if (passwordInput.trim() === '') {
                alert('Please enter a password.');
                return;
            }

            window.location.href = 'dashboard.html';

            else {
                alert('Email or password mismatch');
            }

            // If all inputs are valid, proceed with form submission
            // You can add your own code to handle form submission or send data to the server
            alert('Form submitted!\n\nName: ' + nameInput + '\nEmail: ' + emailInput);

            // Optionally, you can reset the form after submission
            document.querySelector('form').reset();
        });
    </script>
</body>

</html>
