const menuBtn = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.sidebar');
const app = document.querySelector('.wrapper');

menuBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  menu.classList.add('sidebar-tablet-and-moblie');
});

closeMenuBtn.addEventListener('click', (event) => {
  menu.classList.remove('sidebar-tablet-and-moblie');
});

menu.addEventListener('click', (event) => {
  event.stopPropagation();
});

app.addEventListener('click', () => {
  menu.classList.remove('sidebar-tablet-and-moblie');
});
