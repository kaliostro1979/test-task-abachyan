import React, {useContext, useEffect} from 'react'
import {Context} from "@/js/react/context/context";
import {cartChanges} from "@/js/react/url";
import CartSubTotal from "@/js/react/components/cart/CartSubTotal";
import CartQuantity from "@/js/react/components/cart/CartQuantity";
import Overlay from "@/js/react/components/overlay/Overlay";
import CartProducts from "@/js/react/components/cart/CartProducts";


const Cart = () => {

    const {
        products,
        productData,
        productCount,
        currency,
        totalPrice,
        isClicked,
        setProducts,
        setIsClicked,
        open,
        openSideCart,
        closeSideCart,
        setQuantity,
        setProductCount
    } = useContext(Context)


    const addButton = document.querySelector('.product-main__control-wrapper__add-to-cart-btn')
    const sideCartButton = document.querySelectorAll('.shopping-card-icon')
    const sideCartIconCounter = document.querySelector('.shopping-card-icon__count')
    let body = document.querySelector('body')

    useEffect(() => {
        if (open) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'unset'
        }
        sideCartIconCounter.textContent = productCount.toString()
        productData()
    }, [open, isClicked, productCount])


    const removeItem = async (id) => {
        await fetch(cartChanges, {
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
            .then(res => res.json())
            .then(data => {
                setProducts(data.items)
                setProductCount(data.item_count)
            })
    }

    const changeCartItemsQuantity = (e, id) => {
        let inputValue = parseInt(e.target.parentElement.childNodes[1].value)
        if (e.target.name === 'increment') {
            inputValue = inputValue + 1
            setQuantity(inputValue)
        }
        if (e.target.name === 'decrement') {
            inputValue = inputValue - 1
            setQuantity(inputValue)
        }
        updateItemsQuantity(id, inputValue).then(() => setIsClicked(true))
    }

    const updateItemsQuantity = async (id, qnty) => {

        await fetch(cartChanges, {
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
            .then(res => res.json())
            .then(data => data)
    }

    addButton && addButton.addEventListener('click', openSideCart)
    for (let i = 0; i < sideCartButton.length; i++) {
        sideCartButton[i].addEventListener('click', openSideCart)
    }




    return (
        <>
            <Overlay open={open} closeSideCart={closeSideCart}/>
            <div className="side-cart__main" style={{right: open ? 0 : '-360px'}}>
                <CartQuantity productCount={productCount} closeSideCart={closeSideCart}/>
                <CartProducts
                    products={products}
                    changeCartItemsQuantity={changeCartItemsQuantity}
                    currency={currency}
                    removeItem={removeItem}
                />
                <CartSubTotal totalPrice={totalPrice} currency={currency}/>
            </div>
        </>
    )
}

export default Cart