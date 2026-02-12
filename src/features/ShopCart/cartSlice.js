import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], //final cart items
    tempItems: [], //Temporary items for updates 
    totalPrice: 0
}

const cartSlice = createSlice({
   name: 'cart',
   initialState
})

export default cartSlice.reducer