// toggle class active
const navbarNav = document.querySelector('.nav-menu');

// ketika menu diklik
document.querySelector('#ham-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// click diluar side bire untuk menghilangkan menu
const hamMenu = document.querySelector('#ham-menu');

document.addEventListener('click', function (e) {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
