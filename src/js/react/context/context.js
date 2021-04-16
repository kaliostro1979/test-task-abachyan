import React, {useEffect, useState} from 'react'
import {cartURL, productsJSON, productsURL} from "@/js/react/r-tools/url";
import {currencies as Currencies } from '../r-tools/currencies'
export const Context = React.createContext();

export const Provider = ({children})=>{

    const [products, setProducts] = useState([])
    const [productCount, setProductCount] = useState(0)
    const [currency, setCurrency] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    const [open, setOpen] = useState(false)
    const [quantity, setQuantity] = useState(0)

    useEffect(()=>{
        productData()
        getAllProducts()

    },[open, productCount])


    /*--- Get All Products in Cart ----*/

    const productData = async ()=>{
        await fetch(cartURL)
            .then(res => res.json())
            .then(data => {
                setProducts(data.items)
                setProductCount(data.item_count)
                Currencies.filter((c)=>{
                    if (data.currency === c.name){
                        setCurrency(c.symbol)
                    }
                })
                setTotalPrice(data.total_price)
                setIsClicked(false)
            })
    }


    /*---- Get Store All Products ----*/

    const getAllProducts = async ()=>{
        await fetch(`${productsURL + productsJSON}`)
            .then(res=>res.json())
            .then(data=>{
                setAllProducts(data.products)
            })
    }

    /*---- Side Cart Control ----*/

    const openSideCart = ()=>{
        setOpen(true)
    }

    const closeSideCart = ()=>{
        setOpen(false)
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
            setOpen,
            openSideCart,
            closeSideCart,
            setQuantity,
            setProductCount

        }}>
            {children}
        </Context.Provider>
    )
}
