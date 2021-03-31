let sideCartBagButton = document.querySelectorAll('.shopping-card-icon')
let sideCartCloseButton = document.querySelector('.side-cart__quantity__close')
let sideCart = document.querySelector('.side-cart__main')
let overlay = document.querySelector('.overlay')



for (let i = 0; i < sideCartBagButton.length; i++){
    sideCartBagButton[i].addEventListener('click', function (){
        sideCart.classList.add('open-cart')
        overlay.classList.add('overlay-open')
    })
}

sideCartCloseButton.addEventListener('click', ()=>{
    sideCart.classList.remove('open-cart')
    overlay.classList.remove('overlay-open')
})

overlay.addEventListener('click', function (){
    sideCart.classList.remove('open-cart')
    overlay.classList.remove('overlay-open')
})

