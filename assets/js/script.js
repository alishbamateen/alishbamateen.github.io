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

// Fade-in animations on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
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