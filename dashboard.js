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
<body>
<body class="card card-cover h-100 text-bg-dark rounded-4 shadow-lg"
style="background-image:linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.4)), url(pexels-alex-urezkov-12040724.jpg );">
    
    <div class="container px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom">Dashboard</h2>
    
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <div class="card card-cover h-100  text-bg-dark rounded-5 shadow-lg" style="background-image: url(smm.jpeg);">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 lead-3 lh-1 fw-bold text-light">Balance</h3>
                <ul class="d-flex list-unstyled mt-auto">
                    
                </ul>
              </div>
            </div>
          </div>
    
          <div class="col">
            <div class="card card-cover h-100 text-bg-dark rounded-5 shadow-lg" style="background-image: url(smkl.jpeg);">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 lead-3 lh-1 fw-bold">Debt Financing</h3>
                <ul class="d-flex list-unstyled mt-auto">
                  
                 
                  
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div class="col">
            <div class="card card-cover h-100  text-bg-dark rounded-5 shadow-lg" style="background-image: url(skrt.jpeg);">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 lead-3 lh-1 fw-bold">Financial Activity</h3>
                <ul class="d-flex list-unstyled mt-auto">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    

      <div class="container px-4 py-5" id="custom-cards">
      
        
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div class="col">
              <div class="card card-cover h-100 text-bg-dark rounded-5 shadow-lg" style="background-image: url(len.jpeg);">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 lead-3 lh-1 fw-bold text-light">Loans</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                      
                  </ul>
                </div>
              </div>
            </div>
      
            <div class="col">
              <div class="card card-cover h-100  text-bg-dark rounded-5 shadow-lg" style="background-image: url(sec.jpeg);">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 lead-3 lh-1 fw-bold">Security</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                    
                   
                    
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      
            <div class="col">
              <div class="card card-cover h-100 text-bg-dark rounded-5 shadow-lg" style="background-image: url(prg.jpeg);">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 lead-3 lh-1 fw-bold">Progress</h3>
                  <ul class="d-flex list-unstyled mt-auto">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    


      <section class="bg-secondary">
        <!--Footer-->
    
    
        <div class="container">
          <footer class="py-3 my-4 mt-5">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary"><span class="text-light">
                    Home</span></a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary"><span class="text-light">
                    Features</span></a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary"><span class="text-light">
                    Pricing</span></a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary"><span class="text-light">
                    FAQs</span></a></li>
              <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary"><span class="text-light">
                    About</span></a></li>
            </ul>
            <p class="text-center text-body-secondary"><span class="text-light"> &copy; 2023 <span class="text-body-secondary"> PrivaZone</span>, Inc</p></span>
          </footer>
        </div>
    
      </section>
    
    
    


      
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Code to execute after the DOM has loaded
            // You can add your JavaScript logic here

            // Example: Updating user profiles
            const userProfileForm = document.querySelector('#user-profile-form');
            const nameInput = document.querySelector('#name-input');
            const emailInput = document.querySelector('#email-input');

            userProfileForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent form submission

                const name = nameInput.value;
                const email = emailInput.value;

                // Perform actions to update user profile (e.g., send AJAX request, update database, etc.)
                // You can add your own logic here

                // Show a success message
                alert(`User profile updated successfully!\nName: ${name}\nEmail: ${email}`);
            });

            // Example: Performing specific processes or activities
            const processButton = document.querySelector('#process-button');

            processButton.addEventListener('click', function() {
                // Perform specific processes or activities
                // You can add your own logic here

                // Show a success message
                alert('Process completed successfully!');
            });
        });
    </script>
</body>
</html>
