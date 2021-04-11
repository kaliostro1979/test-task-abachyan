import React from 'react'
import ReactDOM from 'react-dom'
import AddToCartForm from "@/js/react/components/AddToCartForm";
import {Provider} from "@/js/react/context/context";



ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <AddToCartForm/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('form')
);