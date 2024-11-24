let sideMenu = document.getElementsByClassName('aside__NavigationMenu')[0];
let buttonOpenSideMenu = document.getElementsByClassName('header-above-part__menu-icon')[0];
let buttonCloseSideMenu = document.getElementsByClassName('aside__close-icon')[0];

buttonOpenSideMenu.addEventListener('click', function () {
    sideMenu.classList.toggle('aside__sideMenuOpened');
});

buttonCloseSideMenu.addEventListener('click',function (){
    sideMenu.classList.toggle('aside__sideMenuOpened');
});