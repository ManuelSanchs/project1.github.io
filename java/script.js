const menuToggle = document.querySelector('.sandwich-menu');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

window.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove('active');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('active');
  }
});
