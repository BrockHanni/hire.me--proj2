const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#emailInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();

  if (!email || !password) {
    // Display an error message to the user
    alert('Please enter your email and password.');
    return; // Stop the function execution if validation fails
  }

  // Send a POST request to the API endpoint
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successful, redirect the browser to the search page
    window.location.replace('/searchPage');
  } else {
    alert(response.statusText);
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
 console.log("signupFormHandler");
  const email = document.querySelector('#emailInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();

  if (email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace ('/searchPage')
    } else {
      alert(response.statusText);
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signupbtn');
  signupForm.addEventListener('click', signupFormHandler);
});