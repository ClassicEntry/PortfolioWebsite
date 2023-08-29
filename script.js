// Function to toggle the visibility of the 'Contact Information' section
function toggleContactInfo() {
    const contactSection = document.getElementById('contact');
    if (contactSection.style.display === 'none' || contactSection.style.display === '') {
      contactSection.style.display = 'block';
    } else {
      contactSection.style.display = 'none';
    }
  }
  
  // Attach the function to a button
  const toggleButton = document.getElementById('toggle-contact-info');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleContactInfo);
  }