<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="index.css">
    
    <style>
        .error {
            color: red;
        }
    </style>
</head>
<body>

   <title>Responsive Registration Form </title>
</head>
<body class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
  style="background-image:linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.4)), url(pexels-alex-urezkov-12040724.jpg );">

    <div class="container">
        <header>Register</header>

        <form id="registrationForm" action="#">
            <div class="form first">
                <div class="details personal">
                    <span class="title">Personal Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Full Name</label>
                            <input type="text" id="fullName" placeholder="Enter your name" required>
                            <span id="fullNameError" class="error"></span>
                        </div>

                        <div class="input-field">
                            <label>Date of Birth</label>
                            <input type="date" id="dob" placeholder="Enter birth date" required>
                            <span id="dobError" class="error"></span>
                        </div>

                        <div class="input-field">
                            <label>Email</label>
                            <input type="text" id="email" placeholder="Enter your email" required>
                            <span id="emailError" class="error"></span>
                        </div>

                        <div class="input-field">
                            <label>Mobile Number</label>
                            <input type="number" id="mobileNumber" placeholder="Enter mobile number" required>
                            <span id="mobileNumberError" class="error"></span>
                        </div>

                        <div class="input-field">
                            <label>Gender</label>
                            <select id="gender" required>
                                <option disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                            <span id="genderError" class="error"></span>
                        </div>

                        <div class="input-field">
                            <label>Occupation</label>
                            <input type="text" id="occupation" placeholder="Enter your occupation" required>
                            <span id="occupationError" class="error"></span>
                        </div>
                    </div>
                </div>

                <button class="submit" type="submit">
                    <span class="btnText">Submit</span>
                    <i class="uil uil-navigator"></i>
                </button>
            </div>
        </form>
    </div>

    <script>
        const form = document.getElementById('registrationForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (validateForm()) {
                const fullName = document.getElementById('fullName').value;
                const dob = document.getElementById('dob').value;
                const email = document.getElementById('email').value;
                const mobileNumber = document.getElementById('mobileNumber').value;
            }
            window.location.href = 'dashboard.html';
