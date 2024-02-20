import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAllCartItems = createAsyncThunk(
    "cart/fetchAllCartItems",
    async () => {
        const response = await fetch('http://localhost:3000/cart')
        const data = await response.json()
        return data
    }
)


export const addCartItem = createAsyncThunk(
    "cart/addCartItem",
    async (item) => {

        let newCartItem = {
            id: item.id,
            name: item.name,
            price: item.unitPrice,
            quantity: 1
        }

        const response = await fetch('http://localhost:3000/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCartItem)
        })
        await response.json()

        return newCartItem
    }
)


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        loading: false
    },
    extraReducers: builder => {
        builder.addCase(fetchAllCartItems.fulfilled, (state, action) => {
            state.cartItems = action.payload
        })

        builder.addCase(addCartItem.fulfilled, (state, action) => {
            state.cartItems = [...state.cartItems, action.payload]
        })
    }
})

export default cartSlice.reducer



//useSelector, useDispatch, createSlice, createAsyncThunk
//useSelector ile global statei okuyoruz
//useDispatch ile global statei degistiriyoruz
//createSlice ile bir slice olusturuyoruz
//createAsyncThunk ile async islemlerimizi yonetiyoruz. Middleware olarak redux-thunk kullanmamiza gerek kalmiyor. createAsyncThunk ile async islemlerimizi yonetebiliyoruz.
//createReducer ile bir reducer olusturuyoruz
//createAction ile bir action olusturuyoruz

