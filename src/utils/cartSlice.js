import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            console.log("additem action: ", action)
            state.items.push(action.payload)
            console.log("state: ", state)
        },
        removeItem: (state, action) => {
            //remove logic
        },
        clearCart: (state, action) => {
            state.items.length = 0
        },
    },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
