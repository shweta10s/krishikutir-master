const { configureStore } = require("@reduxjs/toolkit");
import popupSlice from "../slice/popupSlice"

export const store = configureStore({
    reducer: {
        modal:popupSlice
    }
})