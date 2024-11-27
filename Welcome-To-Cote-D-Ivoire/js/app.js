document.addEventListener("DOMContentLoaded", () => {
  alert("Welcome to the registration and rating page. Thank you for visiting us!");
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', (e) => {

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.getElementById('rating').value;

    // Regex validation
    const nameRegex = /^[A-Za-z\s]{3,50}$/; // Allows letters and spaces, 3-50 characters
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format

    // Validate name
    if (!nameRegex.test(name)) {
      alert('Invalid name. Please use letters only (3-50 characters).');
      return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
      alert('Invalid email format.');
      return;
    }

    // Generate and center the result
    resultDiv.innerHTML = `
<video width="640" height="360" controls autoplay>
      <source src="https://www.motionelements.com/stock-video-39753527-the-balls-come-together-to-form-the-flag-of-cote-d-ivoire.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>
      <h3>Thank You for Your Feedback!</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Rating:</strong> ${rating}/5</p>

    `;


    // Center the result using Flexbox
    resultDiv.style.display = 'flex'; // Flexbox container
    resultDiv.style.flexDirection = 'column'; // Stack child elements vertically
    resultDiv.style.justifyContent = 'center'; // Center child elements vertically
    resultDiv.style.alignItems = 'center'; // Center child elements horizontally
    resultDiv.style.height = '100vh'; // Make the div take full viewport height
    resultDiv.style.textAlign = 'center'; // Center-align text content

    // Remove the form from the page
    form.remove();
  });
});
