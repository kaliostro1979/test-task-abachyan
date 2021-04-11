import React from 'react'
import ReactDOM from 'react-dom'
import App from "@/js/react/components/App";
import {Provider} from "@/js/react/context/context";


ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
