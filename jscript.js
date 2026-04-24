// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll progress bar
window.addEventListener('scroll', () => {
  const scroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const percent = (scroll / height) * 100;
  document.getElementById('progress-bar').style.width = percent + "%";
});

// Scroll animations
const animated = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
animated.forEach(section => observer.observe(section));

// Typing effect
const phrases = ["Full-stack Developer", "JavaScript Enthusiast", "Creative Coder"];
const typewriter = document.querySelector(".typewriter");
let current = 0, char = 0;

function type() {
  if (char <= phrases[current].length) {
    typewriter.textContent = phrases[current].slice(0, char++);
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      char = 0;
      current = (current + 1) % phrases.length;
      type();
    }, 2000);
  }
}
type();

// Confetti on form submit
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  confetti({ particleCount: 100, spread: 60, origin: { y: 0.6 } });
  alert("Message sent successfully!");
  form.reset();
});
