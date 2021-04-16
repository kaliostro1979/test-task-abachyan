import React from 'react'

const CartSubTotal = (props)=>{
    return(
        <div className="side-cart__total">
            <div className="side-cart__total__value">
                <ul>
                    <li><span>Subtotal</span></li>
                    <li className="side-cart__total_price"><span>{(props.totalPrice/100).toFixed(2)} {props.currency}</span></li>
                </ul>
            </div>
            <div className="side-cart__total__btns">
                <a href="/cart">View cart</a>
                <a href="/checkout" className="btn btn--small-wide">Processed to checkout</a>
            </div>
        </div>
    )
}

export default CartSubTotal