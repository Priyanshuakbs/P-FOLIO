// ===== TYPING ANIMATION =====
const typingTexts = [
  'Full-Stack Developer (MERN)',
  'React & Next.js Enthusiast',
  'Java & DSA Problem Solver',
  'Cybersecurity Explorer',
  'Building Scalable Web Apps'
];
let textIndex = 0, charIndex = 0, isDeleting = false;
const typingEl = document.getElementById('typing-text');

function typeEffect() {
  const current = typingTexts[textIndex];
  typingEl.textContent = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);
  let speed = isDeleting ? 30 : 60;
  if (!isDeleting && charIndex > current.length) {
    speed = 2000; isDeleting = true;
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    speed = 400;
  }
  setTimeout(typeEffect, speed);
}
typeEffect();

// ===== PARTICLE BACKGROUND =====
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.speedX; this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(124, 58, 237, ${this.opacity})`;
    ctx.fill();
  }
}
for (let i = 0; i < 80; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(124, 58, 237, ${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); });

// ===== MOBILE NAV =====
document.getElementById('hamburger').addEventListener('click', () => document.getElementById('mobileNav').classList.add('active'));
document.getElementById('closeNav').addEventListener('click', () => document.getElementById('mobileNav').classList.remove('active'));
document.querySelectorAll('#mobileNav a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobileNav').classList.remove('active'));
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== SKILL BAR ANIMATION =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.style.width = entry.target.dataset.width + '%'; });
}, { threshold: 0.5 });
document.querySelectorAll('.skill-bar-fill').forEach(bar => skillObserver.observe(bar));

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 200;
  sections.forEach(section => {
    const top = section.offsetTop, height = section.offsetHeight, id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) link.classList.toggle('active', scrollY >= top && scrollY < top + height);
  });
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input, textarea');
  const mailto = `mailto:priyanshubhati2307@gmail.com?subject=${encodeURIComponent(inputs[2].value || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${inputs[0].value} (${inputs[1].value})\n\n${inputs[3].value}`)}`;
  window.open(mailto);
  const btn = this.querySelector('.btn-submit');
  btn.textContent = 'Message Sent! ✅';
  btn.style.background = 'linear-gradient(135deg, #22c55e, #06b6d4)';
  setTimeout(() => { btn.textContent = 'Send Message ✨'; btn.style.background = ''; this.reset(); }, 3000);
});
