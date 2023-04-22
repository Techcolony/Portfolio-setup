const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');
const menuList = document.querySelectorAll('.nav-item');

function displayMenu() {
  if (navMenu.style.display === 'none') {
    navMenu.style.display = 'block';
    toggleMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'none';
    toggleMenu.style.display = 'block';
  }
}

function hideMenu() {
  if (toggleMenu.style.display === 'none') {
    toggleMenu.style.display = 'block';
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'block';
  }
}
toggleMenu.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', hideMenu);
menuList.forEach((section) => {
  section.addEventListener('click', hideMenu);
});