// =========================
// APK Download Logic
// =========================
// Replace APK_URL with your actual hosted APK path (CDN, S3, or server)
const APK_URL = 'downloads/cognitive-ambulance-v1.0.0.apk';

function triggerApkDownload(e) {
  if (e) e.preventDefault();
  // Show modal
  document.getElementById('apkModal').classList.add('active');
  document.getElementById('modalOverlay').classList.add('active');

  // Auto-trigger download after brief delay for UX
  setTimeout(() => {
    const link = document.createElement('a');
    link.href = APK_URL;
    link.download = 'cognitive-ambulance-v1.0.0.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 800);
}

function closeApkModal() {
  document.getElementById('apkModal').classList.remove('active');
  document.getElementById('modalOverlay').classList.remove('active');
}

document.getElementById('modalClose').addEventListener('click', closeApkModal);
document.getElementById('modalOverlay').addEventListener('click', closeApkModal);

// =========================
// Pricing Banner
// =========================
const bannerEl = document.getElementById('pricingBanner');
const navbar = document.getElementById('navbar');
const bannerClose = document.getElementById('bannerClose');
const BANNER_HEIGHT = 36;

bannerClose.addEventListener('click', () => {
  bannerEl.style.display = 'none';
  navbar.classList.add('banner-hidden');
  sessionStorage.setItem('bannerClosed', 'true');
});

// Restore closed state within session
if (sessionStorage.getItem('bannerClosed')) {
  bannerEl.style.display = 'none';
  navbar.classList.add('banner-hidden');
}

// =========================
// Custom Cursor (desktop only)
// =========================
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

// =========================
// Mobile Menu Toggle
// =========================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a:not(.nav-apk-btn)').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// =========================
// Smooth Scroll
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =========================
// Tech Stack Badges
// =========================
const toolsAndTech = [
  "Flutter mobile application",
  "React EMS dashboard",
  "Raspberry Pi 5",
  "TensorFlow Lite",
  "Quantization & Pruning",
  "MQTT messaging protocol",
  "Firebase Cloud Messaging",
  "Firebase Realtime Database",
  "AWS Lambda serverless",
  "MediaPipe Face Landmarker",
  "MobileNetV2 CNN + LSTM",
  "Random Forest classifier",
  "GPS & accelerometer sensing",
  "OpenCV preprocessing",
  "Python backend & training",
  "Git / GitHub"
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

// =========================
// Contact Form
// =========================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = '✓ Message received. Our team will respond within 24 hours.';
    formMessage.style.color = '#2ecc71';
    contactForm.reset();
    setTimeout(() => { formMessage.textContent = ''; }, 5000);
  });
}

// =========================
// Navbar Scroll Effect
// =========================
window.addEventListener('scroll', () => {
  const navbarEl = document.querySelector('.navbar');
  if (navbarEl) {
    if (window.scrollY > 50) {
      navbarEl.style.background = 'rgba(10, 12, 21, 0.97)';
      navbarEl.style.backdropFilter = 'blur(24px)';
    } else {
      navbarEl.style.background = 'rgba(10, 12, 21, 0.85)';
    }
  }
});

// =========================
// Intersection Observer (scroll animations)
// =========================
const observerOptions = { threshold: 0.08, rootMargin: '0px 0px -20px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .feature-card, .team-card, .pricing-card').forEach(el => {
  observer.observe(el);
});