document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    // threshold 0.1 means 10% of the section must be visible
    threshold: 0.1, 

  };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Find the elements we want to animate
    const elements = entry.target.querySelectorAll('h2, h1, .dek');

    if (entry.isIntersecting) {
      // 1. Entering the screen: Add the class
      entry.target.classList.add('is-visible');
      elements.forEach(el => el.classList.add('is-visible'));
    } else {
      // 2. Leaving the screen: Remove the class to reset
      entry.target.classList.remove('is-visible');
      elements.forEach(el => el.classList.remove('is-visible'));
    }
    
    // REMOVED: observer.unobserve(entry.target);
  });
}, observerOptions);

  // Targets all sections
  const sections = document.querySelectorAll('#intro, #UX, #Motion, #Graphic');
  sections.forEach(sec => {
    if (sec) observer.observe(sec);
  });
});