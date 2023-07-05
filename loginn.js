var LoginModule = (function() {
  // Valid credentials for testing
  var validCredentials = [
    { email: "effiejohnortega@gmail.com", password: "fj123456" },
    { email: "effiejohnortega@gmail.com", password: "FJ123456" }
  ];

  function validateCredentials(email, password) {
    // Check if email and password match any valid credentials
    return validCredentials.some(function(credentials) {
      return credentials.email === email && credentials.password === password;
    });
  }

function login() {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    if (validateCredentials(email, password)) {
      // Redirect to dashboard.html upon successful login
      window.location.href = "dashboard.html";
    } else {
      displayError("Invalid email or password. Please try again.");
    }
  }

function displayError(message) {
    var errorElement = document.getElementById("error");
    errorElement.textContent = message;
  }

  return {
    login: login
  };
})();


document.getElementById("loginButton").addEventListener("click", LoginModule.login);