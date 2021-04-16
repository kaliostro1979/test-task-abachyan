import React from 'react'
import ReactDOM from "react-dom";
import {Provider} from "@/js/react/context/context";
import RecentlyViewedProducts from "@/js/react/components/RecentliViewedProducts";


const container = document.getElementById('recently-viewed')

if (container){
    ReactDOM.render(
        <Provider>
            <RecentlyViewedProducts/>
        </Provider>,
        container
    );
}

