const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    isOpen:false,
}
const popupSlice = createSlice({
    name:'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModel: (state) => {
            state.isOpen = false;
        }
    }
})

export const { openModal , closeModel } = popupSlice.actions;
export default popupSlice.reducer