import React, {useContext, useEffect, useMemo, useRef, useState} from 'react'
import {Context} from "@/js/react/context/context";
import AddToCartForm from "@/js/react/components/AddToCartForm";


const Cart = () => {

    const {products, productData, productCount, currency, totalPrice, isClicked, setProducts,setIsClicked} = useContext(Context)


    const [open, setOpen] = useState(false)
    const [quantity, setQuantity] = useState(0)


    const addButton = document.querySelector('.product-main__control-wrapper__add-to-cart-btn')
    const sideCartButton = document.querySelectorAll('.shopping-card-icon')
    const sideCartIconCounter = document.querySelector('.shopping-card-icon__count')


    const itemQuantity = useRef(null)



    const openSideCart = ()=>{
        setTimeout(()=>{
            setOpen(true)
        },300)
    }

    const closeSideCart = ()=>{
        setOpen(false)
    }




    useEffect(()=>{
        sideCartIconCounter.textContent = productCount.toString()
        productData().then()
    }, [open, isClicked, productCount])


    const removeItem = async (id)=>{
        await fetch('/cart/change.js',{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": `${id}`,
                "quantity": "0"
            })
        })
            .then(res=>res.json())
            .then(data=>{
                setProducts(data.items)
            })
    }

    const incrementValue = (e,id)=>{
        let inputValue = e.target.parentElement.childNodes[1].value
        if (e.target.name === 'increment'){
            inputValue = parseInt(inputValue) + 1
            setQuantity(inputValue)
        }
        if (e.target.name === 'decrement'){
            inputValue = parseInt(inputValue) - 1
            setQuantity(inputValue)
        }
        updateItemsQuantity(id, inputValue).then(()=>setIsClicked(true))
    }

    const updateItemsQuantity = async (id, qnty)=>{

        await fetch('/cart/change.js',{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": `${id}`,
                "quantity": `${qnty}`
            })
        })
            .then(res=>res.json())
            .then(data=>data)
    }

    addButton && addButton.addEventListener('click', openSideCart)
    for (let i = 0; i < sideCartButton.length; i++){
        sideCartButton[i].addEventListener('click', openSideCart)
    }

    return (
        <>
            <div className="overlay" style={{ display: open ? 'block' : 'none' }} onClick={closeSideCart}> </div>
            <div className="side-cart__main" style={{ right: open ? 0 : '-360px' }}>
                <div className="side-cart__quantity">
                    <span>cart ({productCount})</span>
                    <div className="side-cart__quantity__close" onClick={closeSideCart}>
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1.35355" y1="0.646452" x2="25.3535" y2="24.6464" stroke="#202020"/>
                            <line x1="0.646447" y1="24.6464" x2="24.6464" y2="0.646442" stroke="#202020"/>
                        </svg>
                    </div>
                </div>
                <div className="side-cart__wrapper">
                    {
                        products && products.map((prod) => {
                            return (
                                <div className="side-cart-item mb-5" key={prod.id}>
                                    <div className="side-cart-item__image" style={{ backgroundImage: `url(${prod.image})` }}> </div>
                                    <div className="side-cart-item-info">
                                        <div className="side-cart-item-info__title">
                                            <a href={prod.url}><span>{prod.title}</span></a>
                                        </div>
                                        <div className="side-cart-item-info__quantity">
                                            <span>Quantity: {prod.quantity}</span>
                                        </div>
                                        <div className="side-cart-item-info__price">
                                            <span>{(prod.final_line_price/100).toFixed(2)} {currency}</span>
                                            <span className="side-cart-item-info__price__original">"Compair price"</span>
                                        </div>

                                        <div className="product-main__control-wrapper__counter">

                                                <button className="product-main__control-wrapper__counter__btn decrement-btn"
                                                        onClick={(e)=>incrementValue(e,prod.variant_id)}
                                                        name="decrement"
                                                >-</button>
                                                <input
                                                    className="quantity-value"
                                                    min="1"
                                                    type="number"
                                                    id={prod.id}
                                                    name="quantity"
                                                    value={prod.quantity}
                                                    ref={itemQuantity}
                                                    onChange={(e)=>updateItemsQuantity(e,prod.variant_id)}
                                                />
                                                <button className="product-main__control-wrapper__counter__btn increment-btn"
                                                        onClick={(e)=>incrementValue(e,prod.variant_id)}
                                                        name="increment"
                                                >+
                                                </button>

                                        </div>
                                        <div className="side-cart-item-info__control">
                                            <button onClick={()=>removeItem(prod.variant_id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="side-cart__total">
                    <div className="side-cart__total__value">
                        <ul>
                            <li><span>Subtotal</span></li>
                            <li className="side-cart__total_price"><span>{(totalPrice/100).toFixed(2)} {currency}</span></li>
                        </ul>
                    </div>
                    <div className="side-cart__total__btns">
                        <a href="/cart">View cart</a>
                        <a href="/checkout" className="btn btn--small-wide">Processed to checkout</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart