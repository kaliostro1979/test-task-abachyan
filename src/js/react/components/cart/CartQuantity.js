import React from 'react'

const CartQuantity = (props)=>{

    return(
        <div className="side-cart__quantity">
            <span>cart ({props.productCount})</span>
            <div className="side-cart__quantity__close" onClick={props.closeSideCart}>
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.35355" y1="0.646452" x2="25.3535" y2="24.6464" stroke="#202020"/>
                    <line x1="0.646447" y1="24.6464" x2="24.6464" y2="0.646442" stroke="#202020"/>
                </svg>
            </div>
        </div>
    )
}

export default CartQuantity