import $ from 'jquery';
import {formatMoney} from "@shopify/theme-currency";



function renderProduct(product) {
    return `
        <div class="col-lg-2 col-sm-6">
            <a href="${product.url}" class="product__anchor">
                <img class="product__img" src="${product.featured_image}" alt="${product.title}"/>
                <p class="product__title">${product.title}</p>
                <p class="product__price">${formatMoney(product.price, window.moneyFormat)}</p>
            </a>
        </div>
    `
}

$('.recommend-wrapper').ready(async ()=>{
    let list = document.querySelector(".product-recommendations__list")
    let productId = list.dataset.productId
    await fetch(`/recommendations/products.json?product_id=${productId}&limit=6`)
        .then(response => response.json())
        .then(({ products }) => {
            if (products.length > 0) {
                list.innerHTML = products.map((item)=>{
                    return renderProduct(item)
                }).join("")
            }else{
                list.style.display = 'none'
            }
        });
})
