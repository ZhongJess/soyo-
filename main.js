const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
const navOverlay = document.getElementById('navOverlay');
const navClose = document.getElementById('navClose');
const open = () => mobileNav.classList.add('open');
const close = () => mobileNav.classList.remove('open');
hamburgerBtn.addEventListener('click', open);
navClose.addEventListener('click', close);
navOverlay.addEventListener('click', close);