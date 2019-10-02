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


const mapMark = document.querySelector('.map__mark');
mapMark.addEventListener('mouseover', function () {
    mapMark.src = './images/pin copy 6 hover.svg';
});

mapMark.addEventListener('mouseout', function () {
    mapMark.src = './images/pin copy 6.svg';
});

const mapDiv = document.querySelector('.map__div');
mapMark.addEventListener('click', function () {
    mapDiv.classList.add('map__div_active');
});

const mapLogoClose = document.querySelector('.map__logo_close');
mapLogoClose.addEventListener('click', function () {
    mapDiv.classList.remove('map__div_active');
});