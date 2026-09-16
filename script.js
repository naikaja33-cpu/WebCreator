// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('[data-reveal]');

const checkIfInView = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
};

// Check on load and scroll
window.addEventListener('load', checkIfInView);
window.addEventListener('scroll', checkIfInView);

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const budget = document.getElementById('budget').value;
  const message = document.getElementById('message').value.trim();

  // Reset errors
  document.querySelectorAll('.error').forEach(el => el.style.display = 'none');
  formMessage.textContent = '';
  formMessage.className = 'form-message';

  // Simple validation
  let isValid = true;

  if (name === '') {
    document.getElementById('nameError').style.display = 'block';
    isValid = false;
  }

  if (email === '') {
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
  } else if (!email.includes('@') || !email.includes('.')) {
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
  }

  if (service === '') {
    document.getElementById('serviceError').style.display = 'block';
    isValid = false;
  }

  if (budget === '') {
    document.getElementById('budgetError').style.display = 'block';
    isValid = false;
  }

  if (message === '') {
    document.getElementById('messageError').style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    // Show success message
    formMessage.textContent = 'Thank you for your message! I will get back to you within 24 hours.';
    formMessage.className = 'form-message success';

    // Reset form
    contactForm.reset();

    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, service, budget, message });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Account for header height
        behavior: 'smooth'
      });
    }
  });
});

// Orb animation (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
  const orbs = document.querySelectorAll('.orb');

  // Simple floating animation
  orbs.forEach((orb, index) => {
    let floatOffset = 0;
    const floatSpeed = 0.5 + index * 0.3;
    const floatAmount = 20 + index * 10;

    const float = () => {
      floatOffset += 0.01;
      const yOffset = Math.sin(floatOffset) * floatAmount;
      orb.style.transform = `translate(${index * 20}px, ${yOffset}px)`;
      requestAnimationFrame(float);
    };

    float();
  });
});