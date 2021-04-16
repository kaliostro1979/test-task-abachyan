import React from 'react'
import ReactDOM from 'react-dom'
import App from "@/js/react/components/App";
import {Provider} from "@/js/react/context/context";
import RecentlyViewedProducts from "@/js/react/components/RecentliViewedProducts";


ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('side-cart')
);


