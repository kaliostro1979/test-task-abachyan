import React from 'react'
import ReactDOM from "react-dom";
import {Provider} from "@/js/react/context/context";
import RecentlyViewedProducts from "@/js/react/components/RecentliViewedProducts";

ReactDOM.render(
    <React.StrictMode>
            <Provider>
                <RecentlyViewedProducts/>
            </Provider>
    </React.StrictMode>,
    document.getElementById('recently-viewed')
);