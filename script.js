const body = document.body;
const toggleBtn = document.getElementById('darkModeToggle');

// Ensure button text matches the current mode
if (body.classList.contains('dark-mode')) {
  toggleBtn.textContent = 'Light Mode';
} else {
  toggleBtn.textContent = 'Dark Mode';
}

// Toggle between dark/light mode
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleBtn.textContent = body.classList.contains('dark-mode') 
    ? 'Light Mode' 
    : 'Dark Mode';
});

// Fade-in on scroll using Intersection Observer
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Typewriter effect for the hero heading
document.addEventListener('DOMContentLoaded', () => {
  const text = "Ryan Sabouri"; // The text to type
  const typewriter = document.getElementById("typewriter");
  let index = 0;
  const typingSpeed = 100; // Adjust to speed up/slow down

  function typeCharacter() {
    if (index < text.length) {
      typewriter.textContent += text.charAt(index);
      index++;
      setTimeout(typeCharacter, typingSpeed);
    }
  }

  typeCharacter();
});
