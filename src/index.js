import React from "react";
import ReactDom from 'react-dom';
import App from "./App";

const root = ReactDom.createroot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)