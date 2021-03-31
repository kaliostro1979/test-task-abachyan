const mobileMenuButton = document.querySelector('.navigation-mobile__icon')
const mobileMenu =document.querySelector('.mobile-menu')
const mobileMenuCloseButton = document.querySelector('.mobile-menu__header-icon')

mobileMenuButton.addEventListener('click', function (){
    mobileMenu.classList.add('mobile-menu-open')
})

mobileMenuCloseButton.addEventListener('click', function (){
    mobileMenu.classList.remove('mobile-menu-open')
})

