const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-menu');

menuToggle?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const gallery = document.querySelector('.gallery');
const scrollGallery = (direction) => {
  gallery?.scrollBy({ left: direction * Math.min(gallery.clientWidth * 0.82, 420), behavior: 'smooth' });
};

document.querySelector('.gallery-prev')?.addEventListener('click', () => scrollGallery(-1));
document.querySelector('.gallery-next')?.addEventListener('click', () => scrollGallery(1));
document.querySelector('#year').textContent = new Date().getFullYear();
