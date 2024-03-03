import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            // Find the index of the item to be removed
            const indexToRemove = state.items.findIndex(
                (item) => item.id === action.payload.id
            )

            // If the item is found, remove it
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1)
            }
        },
        clearCart: (state) => {
            state.items.length = 0
        },
    },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
