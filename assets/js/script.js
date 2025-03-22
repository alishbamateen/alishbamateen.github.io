// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Toggle navbar for mobile
const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navbar = document.querySelector('.navbar');

navToggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
});

// Close navbar when a link is clicked
document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', () => {
      navbar.classList.remove('active');
      navToggleBtn.classList.remove('active');
  });
});

// Theme toggle (optional)
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeBtn.classList.toggle('active');
});

// Observer instance for fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing after fading in
      }
  });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
  observer.observe(element);
});

function scrollSkills(direction) {
  const skillsGrid = document.querySelector('.skills-grid');
  const scrollAmount = skillsGrid.clientWidth; // Scroll by the width of the visible area
  skillsGrid.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
  });
}

// ---- NEW CODE ----

// Parallax scrolling effect (subtle)
document.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset;

  // Select the Hero Section and About-me Image
  const heroSection = document.querySelector('.hero');
  const aboutMeImage = document.querySelector('.about-me img');

  // Make sure the element exists before trying to apply transformations
  if (heroSection) {
    heroSection.style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)';
  }

  if (aboutMeImage) {
    aboutMeImage.style.transform = 'translateY(' + scrollPosition * 0.05 + 'px)';
  }
});

// ---  Scroll-triggered animations ---
document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Get all elements with the class scroll-reveal
  const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

  scrollRevealElements.forEach(element => {
      // Calculate the position of the element relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;

      // Add the 'active' class if the element is in the viewport
      if (elementPosition < window.innerHeight * 0.8) { // Adjust the factor as needed
          element.classList.add('active');
      } else {
          element.classList.remove('active');
      }
  });
});