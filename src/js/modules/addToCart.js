import $ from 'jquery';
import {formatMoney} from "@shopify/theme-currency";


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
                .then(data=>{
                    renderCart(data)
                })
        }

    })

    function renderCart(data){
        $('.side-cart__wrapper').html(
            data.items.map((item, index)=>{
               return `    
            <div class="side-cart-item mb-5">
                <div class="side-cart-item__image" style="background-image: url(${item.image})"></div>
                <div class="side-cart-item-info">
                    <div class="side-cart-item-info__title">
                        <a href=${item.url}><span>${item.title}</span></a>
                    </div>
                    <div class="side-cart-item-info__quantity">
                        <span>Quantity: ${item.quantity}</span>
                    </div>
                    <div class="side-cart-item-info__price">
                        <span>${formatMoney(item.line_price, window.moneyFormat)}</span>
                    </div>
                   
                        <div class="product-main__control-wrapper__counter">
                            <button class="product-main__control-wrapper__counter__btn decrement-btn" disabled>-</button>
                            <input class="quantity-value" disabled min="1" type="number" id="quantity" name="quantity" value="${item.quantity}">
                            <button class="product-main__control-wrapper__counter__btn increment-btn">+</button>
                        </div>
                        <div class="side-cart-item-info__control">
                            <a href="/cart/change?line=${index+1}&quantity=0" rel="${item.id}">Remove</a>
                        </div>
                </div>
            </div>
            `
            })
        )
        $('.shopping-card-icon__count').html(data.item_count)
        $('.side-cart__quantity span').html('cart ( ' + data.item_count + ' items )')
        $('.side-cart__total_price').html(formatMoney(data.original_total_price, window.moneyFormat))
    }
})

