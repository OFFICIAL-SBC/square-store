let sideMenu = document.getElementsByClassName('aside__NavigationMenu')[0];
let buttonOpenSideMenu = document.getElementsByClassName('header-above-part__menu-icon')[0];
let buttonCloseSideMenu = document.getElementsByClassName('aside__close-icon')[0];
let buttonMinicar= document.getElementById('minicar-icon');
let asideMicartSection = document.getElementsByClassName('aside-container__shadow-box')[0];
let buttonClosePopSideMenu = document.getElementById('close-popup-icon');

buttonOpenSideMenu.addEventListener('click', function () {
    sideMenu.classList.toggle('aside__sideMenuOpened');
});

buttonCloseSideMenu.addEventListener('click',function (){
    sideMenu.classList.toggle('aside__sideMenuOpened');
});

buttonMinicar.addEventListener('click', function (){
    asideMicartSection.classList.toggle('aside-container__shadow-box--visible');
});

buttonClosePopSideMenu.addEventListener('click',function (){
    asideMicartSection.classList.toggle('aside-container__shadow-box--visible');
})
