const body = document.body;
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

window.addEventListener('load', () => {
  window.setTimeout(() => body.classList.add('loaded'), 250);
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

menuToggle.addEventListener('click', () => {
  const open = menuToggle.classList.toggle('active');
  nav.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  body.style.overflow = open ? 'hidden' : '';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const quotes = [...document.querySelectorAll('.quote')];
const dotsContainer = document.querySelector('.quote-dots');
let quoteIndex = 0;
let autoplay;

quotes.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.setAttribute('aria-label', `Show testimonial ${index + 1}`);
  dot.addEventListener('click', () => showQuote(index));
  dotsContainer.appendChild(dot);
});

const dots = [...dotsContainer.children];

function showQuote(index) {
  quotes[quoteIndex].classList.remove('active');
  dots[quoteIndex].classList.remove('active');
  quoteIndex = (index + quotes.length) % quotes.length;
  quotes[quoteIndex].classList.add('active');
  dots[quoteIndex].classList.add('active');
  restartAutoplay();
}

function restartAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => showQuote(quoteIndex + 1), 6500);
}

dots[0].classList.add('active');
document.querySelector('.quote-arrow.prev').addEventListener('click', () => showQuote(quoteIndex - 1));
document.querySelector('.quote-arrow.next').addEventListener('click', () => showQuote(quoteIndex + 1));
restartAutoplay();

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = item.querySelector('img').alt;
    lightboxCaption.textContent = item.dataset.caption;
    lightbox.showModal();
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.close();
});

document.querySelector('#year').textContent = new Date().getFullYear();
