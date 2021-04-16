import React, {useEffect, useState} from 'react'
import {productsURL} from "@/js/react/url";

export const Context = React.createContext();

export const Provider = ({children})=>{

    const [products, setProducts] = useState([])
    const [productCount, setProductCount] = useState(0)
    const [currency, setCurrency] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    const [open, setOpen] = useState(false)


    useEffect(()=>{
        productData()
        getAllProducts()
    },[open])



    const productData = async ()=>{
        await fetch('/cart.js')
            .then(res => res.json())
            .then(data => {
                setProducts(data.items)
                setProductCount(data.item_count)
                setCurrency(data.currency)
                setTotalPrice(data.total_price)
                setIsClicked(false)
            })
    }

    console.log(products);

    const getAllProducts = async ()=>{
        await fetch(`${productsURL + "/products.json"}`)
            .then(res=>res.json())
            .then(data=>{
                setAllProducts(data.products)
            })
    }



    return(
        <Context.Provider value={{
            productData,
            products,
            productCount,
            currency,
            totalPrice,
            isClicked,
            setProducts,
            setIsClicked,
            allProducts,
            open,
            setOpen
        }}>
            {children}
        </Context.Provider>
    )
}
