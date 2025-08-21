    "use client"

import { store } from "../store/popupStore";

const { Provider } = require("react-redux");

export function Providers ({children}){
    return <Provider store={store}>
        {children}
    </Provider>
}