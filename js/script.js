// ===== script.js =====

// ===== Dark / Light Mode Toggle =====
const toggle = document.querySelector('.theme-toggle');
const icon = document.getElementById('theme-icon');
const body = document.body;

// Check if dark mode was previously saved
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  if (icon) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

if (toggle && icon) {
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    // Toggle icon
    if (isDark) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      localStorage.setItem('theme', 'light');
    }
  });
}

// ===== Mobile Hamburger Menu =====
const menuBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.classList.toggle('open');
  });
}

// ===== Close menu when clicking a link (mobile UX improvement) =====
const navLinks = document.querySelectorAll('.nav-links a');
if (navLinks && navMenu && menuBtn) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuBtn.classList.remove('open');
    });
  });
}

// ===== Add slight scroll effect for header transparency =====
const header = document.querySelector('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}
