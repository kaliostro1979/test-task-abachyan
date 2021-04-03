import $ from 'jquery';


$(document).ready(() => {
    let addButton = $('.product-main__control-wrapper__add-to-cart-btn')
    let addToCartForm = document.querySelector('#add__item-form');

    $(addButton).on('click', async (e) => {
        e.preventDefault()
        let formData = new FormData(addToCartForm ? addToCartForm : '');
        await fetch('/cart/add.js', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                return response.json();
            })
            .then((data)=>{
                if(data){
                   fetchCardItems()
                    $('.side-cart__main').addClass('open-cart')
                    $('body').addClass('covered')
                    $('.overlay').addClass('overlay-open')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        async function fetchCardItems(){
            await fetch('/cart.js')
                .then(res=>res.json())
                .then(data=>data)
        }

    })
})

