// Hide custom cursor on mobile/touch devices
if (window.innerWidth > 900) {
  const cursor = document.querySelector('.custom-cursor');
  const glow = document.querySelector('.cursor-glow');
  
  if (cursor && glow) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      glow.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    });
    
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      glow.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
      glow.style.opacity = '1';
    });
  }
}

// Dark mode toggle
const themeBtn = document.getElementById('themeToggle');
let isDark = true;

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.style.setProperty('--bg-primary', '#0a0c15');
      document.documentElement.style.setProperty('--bg-secondary', '#11131f');
      document.documentElement.style.setProperty('--text-primary', '#f0f4fa');
      document.documentElement.style.setProperty('--text-secondary', '#a0aabe');
      document.documentElement.style.setProperty('--bg-card', 'rgba(18, 22, 35, 0.85)');
    } else {
      document.documentElement.style.setProperty('--bg-primary', '#f0f4fa');
      document.documentElement.style.setProperty('--bg-secondary', '#ffffff');
      document.documentElement.style.setProperty('--text-primary', '#1a1f2e');
      document.documentElement.style.setProperty('--text-secondary', '#4a5568');
      document.documentElement.style.setProperty('--bg-card', 'rgba(255, 255, 255, 0.85)');
    }
  });
}

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === "#" || href === "") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Tools & Tech - One by one list
const toolsAndTech = [
  "Flutter mobile application for ambulance, patient, and pet-owner interfaces",
  "React web dashboard for EMS monitoring, hospital handover, and veterinary portal access",
  "Raspberry Pi 5 with TensorFlow Lite",
  "Quantization and pruning for optimized inference",
  "MQTT messaging protocol",
  "Firebase Cloud Messaging",
  "Firebase Realtime Database",
  "AWS Lambda serverless functions",
  "MediaPipe Face Landmarker",
  "MobileNetV2 CNN + LSTM for fatigue detection",
  "Random Forest classifier for traffic behavior",
  "GPS and accelerometer API for smartphone sensing",
  "OpenCV for image preprocessing",
  "Python for backend and model training",
  "Git/GitHub for version control"
];

const techStackContainer = document.getElementById('techStackList');
if (techStackContainer) {
  toolsAndTech.forEach(tech => {
    const badge = document.createElement('div');
    badge.className = 'tech-badge';
    badge.textContent = tech;
    techStackContainer.appendChild(badge);
  });
}

// Contact form handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = '✓ Thank you! Your message has been sent successfully.';
    formMessage.style.color = '#2ecc71';
    contactForm.reset();
    setTimeout(() => {
      formMessage.textContent = '';
    }, 4000);
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 12, 21, 0.95)';
      navbar.style.backdropFilter = 'blur(20px)';
    } else {
      navbar.style.background = 'rgba(10, 12, 21, 0.85)';
    }
  }
});

// Intersection Observer for scroll animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -20px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .feature-card, .timeline-item, .team-card, .document-card').forEach(el => {
  observer.observe(el);
});