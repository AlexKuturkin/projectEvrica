const navImage = document.querySelector('.nav__image');
navImage.addEventListener('mouseover', function () {
    navImage.src = './images/hover.svg';
});

navImage.addEventListener('mouseout', function () {
    navImage.src = './images/search icon.svg';
});

const bannerButtonPhone = document.querySelector('.banner__button_phone');
const bannerLogoPhone = document.querySelector('.banner__logo_phone');

bannerButtonPhone.addEventListener('mouseover', function () {
    bannerLogoPhone.src = './images/phone icon copy.svg';
});

bannerButtonPhone.addEventListener('mouseout', function () {
    bannerLogoPhone.src = './images/phone icon.svg';
});

