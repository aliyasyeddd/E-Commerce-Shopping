import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
})
//using this createAsyncthunk wewill get access to pending, fulfilled and rejected states of the request we make to the api and
//  we can use those states to update our state accordingly in the extraReducers section of our slice
const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle"
    },
    //using this extra reducers we are just defining different action creators based on lifecycle which we get from the createAsyncThunk and 
    // we are just updating our state based on those action creators
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = "loading";
        })
            //only if request is full filled then we will update the state with the data we get from the api
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded"; state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed"
            })
    }
})

export default productSlice.reducer;