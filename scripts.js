function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // You can add additional validation here before sending the data to the server

  // Simulate sending data to the server
  // In a real scenario, you would use AJAX or Fetch to send a request to the server
  console.log("Email:", email);
  console.log("Password:", password);
  alert("Login attempt:\nEmail: " + email + "\nPassword: " + password);
}
