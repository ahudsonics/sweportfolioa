const previewTexts = {
  'index.html': ['Project Preview 1', 'Project Preview 2', 'Project Preview 3'],
  'biography.html': ['Biography Preview 1', 'Biography Preview 2', 'Biography Preview 3'],
  'resume.html': ['Resume Preview 1', 'Resume Preview 2', 'Resume Preview 3'],
  'projects.html': ['Projects Preview 1', 'Projects Preview 2', 'Projects Preview 3'],
  'contact.html': ['Contact Preview 1', 'Contact Preview 2', 'Contact Preview 3']
};

document.addEventListener('DOMContentLoaded', () => {
  const currentFileName = window.location.pathname.split('/').pop();
  const previewSection = document.querySelector('.preview p');

  if (previewTexts[currentFileName]) {
    const randomIndex = Math.floor(Math.random() * previewTexts[currentFileName].length);
    previewSection.textContent = previewTexts[currentFileName][randomIndex];
  }
});

// Add event listener for form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from submitting the traditional way
  alert('Form submitted!'); // Replace this with your actual form submission logic
});
