let sideCartBagButton = document.querySelectorAll('.shopping-card-icon')
let sideCartCloseButton = document.querySelector('.side-cart__quantity__close')
let sideCart = document.querySelector('.side-cart__main')
let overlay = document.querySelector('.overlay')
let body = document.querySelector('body')



for (let i = 0; i < sideCartBagButton.length; i++){
    sideCartBagButton[i].addEventListener('click', function (){
        sideCart.classList.add('open-cart')
        overlay.classList.add('overlay-open')
        body.classList.add('covered')
    })
}

sideCartCloseButton.addEventListener('click', ()=>{
    sideCart.classList.remove('open-cart')
    overlay.classList.remove('overlay-open')
    body.classList.remove('covered')
})

overlay.addEventListener('click', function (){
    sideCart.classList.remove('open-cart')
    overlay.classList.remove('overlay-open')
    body.classList.remove('covered')
})

