// Topbar announcement carousel
const topbarMsgs = document.querySelectorAll('.topbar-msg');
let topbarIdx = 0;

function showTopbarMsg(idx) {
    topbarMsgs.forEach(m => m.classList.remove('active'));
    topbarMsgs[idx].classList.add('active');
}

document.getElementById('topbarPrev').addEventListener('click', () => {
    topbarIdx = (topbarIdx - 1 + topbarMsgs.length) % topbarMsgs.length;
    showTopbarMsg(topbarIdx);
});

document.getElementById('topbarNext').addEventListener('click', () => {
    topbarIdx = (topbarIdx + 1) % topbarMsgs.length;
    showTopbarMsg(topbarIdx);
});

// Auto-rotate every 5 seconds
setInterval(() => {
    topbarIdx = (topbarIdx + 1) % topbarMsgs.length;
    showTopbarMsg(topbarIdx);
}, 5000);

// Banner carousel
const bannerSlides = document.querySelectorAll('.banner-slide');
let bannerIdx = 0;

function showBannerSlide(idx) {
    bannerSlides.forEach(s => s.classList.remove('active'));
    bannerSlides[idx].classList.add('active');
}

document.querySelector('.carousel-btn-prev').addEventListener('click', () => {
    bannerIdx = (bannerIdx - 1 + bannerSlides.length) % bannerSlides.length;
    showBannerSlide(bannerIdx);
});

document.querySelector('.carousel-btn-next').addEventListener('click', () => {
    bannerIdx = (bannerIdx + 1) % bannerSlides.length;
    showBannerSlide(bannerIdx);
});

// Mobile nav
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
const navOverlay = document.getElementById('navOverlay');
const navClose = document.getElementById('navClose');
const open = () => mobileNav.classList.add('open');
const close = () => mobileNav.classList.remove('open');
hamburgerBtn.addEventListener('click', open);
navClose.addEventListener('click', close);
navOverlay.addEventListener('click', close);

// Nav search bar
const navSearchBtn = document.getElementById('navSearchBtn');
const navSearchBar = document.getElementById('navSearchBar');
const navSearchClose = document.getElementById('navSearchClose');
const navSearchInput = document.getElementById('navSearchInput');

const openSearch = () => {
    navSearchBar.classList.add('open');
    navSearchInput.focus();
};
const closeSearch = () => {
    navSearchBar.classList.remove('open');
    navSearchInput.value = '';
};

navSearchBtn.addEventListener('click', openSearch);
navSearchClose.addEventListener('click', closeSearch);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
});