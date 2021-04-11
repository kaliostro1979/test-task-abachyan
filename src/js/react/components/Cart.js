import React, {useContext, useEffect, useMemo, useState} from 'react'
import {Context} from "@/js/react/context/context";
import AddToCartForm from "@/js/react/components/AddToCartForm";


const Cart = () => {

    const [products, setProducts] = useState([])
    const [productCount, setProductCount] = useState(0)
    const [currency, setCurrency] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)
    const [open, setOpen] = useState(false)


    const openSideCart = ()=>{
        setTimeout(()=>{
            setOpen(true)
        },300)
    }

    console.log(products);

    const closeSideCart = ()=>{
        setOpen(false)
    }

    useEffect(()=>{
        productData().then()
    }, [open])


    const productData = async ()=>{
        await fetch('/cart.js')
            .then(res => res.json())
            .then(data => {
                setProducts(data.items)
                setProductCount(data.item_count)
                setCurrency(data.currency)
                setTotalPrice(data.total_price)
            })
    }

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

    const updateItemsQuantity = (e)=>{

    }

    return (
        <>
            <div className="product-main__control-wrapper__add-to-cart-btn" onClick={openSideCart}>
                <input type="submit" value="Add to cart" className="btn" id="add_to-cart-btn" />
            </div>
            <div className="overlay" style={{ display: open ? 'block' : 'none' }} onClick={closeSideCart}> </div>
            <div className="shopping-card-icon" onClick={openSideCart}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H3.0374L6.42424 17.7756C6.45112 18.4521 6.98872 18.9932 7.66071 18.9932H23.9498" stroke="#202020"/>
                    <path d="M3.5 3.81398H22.9015C23.3316 3.81398 23.7079 3.97632 23.9767 4.30101C24.2186 4.6257 24.3261 5.03157 24.2455 5.46449L22.7133 13.5006C22.5521 14.3664 21.7188 15.0428 20.8586 15.0699H5.86646" stroke="#202020"/>
                    <path d="M8.34888 22.8354C8.34888 21.9179 9.09579 21.1708 9.99925 21.1708C10.9027 21.1708 11.6496 21.9179 11.6496 22.8354C11.6496 23.7529 10.9027 24.5 9.99925 24.5C9.09579 24.5 8.34888 23.7529 8.34888 22.8354Z" stroke="#202020"/>
                    <path d="M18.2675 22.8354C18.2675 21.9179 19.0144 21.1708 19.9178 21.1708C20.8213 21.1708 21.5682 21.9179 21.5682 22.8354C21.5682 23.7529 20.8213 24.5 19.9178 24.5C19.0144 24.5 18.2675 23.7529 18.2675 22.8354Z" stroke="#202020"/>
                </svg>
                <span className="shopping-card-icon__count">
                    {productCount}
                </span>
            </div>
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
                                            <button
                                                className="product-main__control-wrapper__counter__btn decrement-btn"
                                                disabled>-
                                            </button>
                                            <input
                                                className="quantity-value"
                                                disabled min="1"
                                                type="number"
                                                id="quantity"
                                                name="quantity"
                                                value={prod.quantity}
                                            />
                                                <button
                                                    className="product-main__control-wrapper__counter__btn increment-btn">+
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