import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "@/js/react/context/context";
import Cart from "@/js/react/components/cart/Cart";



ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <Cart/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('side-cart')
);


