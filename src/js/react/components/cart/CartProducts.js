import React from 'react'

const CartProducts = (props)=>{
    return(
        <div className="side-cart__wrapper">
            {
                props.products && props.products.map((prod) => {
                    return (
                        <div className="side-cart-item mb-5" key={prod.id}>
                            <div className="side-cart-item__image"
                                 style={{backgroundImage: `url(${prod.image})`}}> </div>
                            <div className="side-cart-item-info">
                                <div className="side-cart-item-info__title">
                                    <a href={prod.url}><span>{prod.title}</span></a>
                                </div>
                                <div className="side-cart-item-info__quantity">
                                    <span>Quantity: {prod.quantity}</span>
                                </div>
                                <div className="side-cart-item-info__price">
                                    <span>{(prod.final_line_price / 100).toFixed(2)} {props.currency}</span>
                                </div>

                                <div className="product-main__control-wrapper__counter">

                                    <button
                                        className="product-main__control-wrapper__counter__btn decrement-btn"
                                        onClick={(e) => props.changeCartItemsQuantity(e, prod.variant_id)}
                                        name="decrement"
                                    >-
                                    </button>
                                    <input
                                        className="quantity-value"
                                        min="1"
                                        type="number"
                                        id={prod.id}
                                        name="quantity"
                                        value={prod.quantity}
                                        onChange={(e) => props.changeCartItemsQuantity(e, prod.variant_id)}
                                    />
                                    <button
                                        className="product-main__control-wrapper__counter__btn increment-btn"
                                        onClick={(e) => props.changeCartItemsQuantity(e, prod.variant_id)}
                                        name="increment"
                                    >+
                                    </button>

                                </div>
                                <div className="side-cart-item-info__control">
                                    <button onClick={() => props.removeItem(prod.variant_id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartProducts