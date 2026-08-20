const menu = document.querySelector('.menu');
const nav = document.querySelector('.navlinks');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.faq-item').classList.toggle('open');
  });
});

const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
document.querySelectorAll('[data-lightbox]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = link.getAttribute('href');
    lightboxImg.alt = link.querySelector('img')?.alt || 'Inventory Guard screenshot';
    lightbox.classList.add('open');
  });
});
if (lightbox) {
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.matches('button')) lightbox.classList.remove('open');
  });
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox) lightbox.classList.remove('open');
});