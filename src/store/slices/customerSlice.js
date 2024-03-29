import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchAllCustomers = createAsyncThunk(
    "customers/fetchAllCustomers",
    () => {
        return axios.get("https://northwind.vercel.app/api/customers")
            .then(response => response.data)

    }
)

export const addNewCustomer = createAsyncThunk(
    "customers/addNewCustomer",
    (customer) => {
        return axios.post("https://northwind.vercel.app/api/customers", customer)
            .then(response => response.data)
    }
)

export const deleteCustomer = createAsyncThunk(
    "customers/deleteCustomer",
    (id) => {
        return axios.delete(`https://northwind.vercel.app/api/customers/${id}`)
            .then(response => {
                return id
            })
    }
)



let initialState = {
    customers: [],
    loading: false,
    error: ""}


const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        
        //fetch cases
        
        builder.addCase(fetchAllCustomers.pending, (state, action) => {
            state.loading = true;
            state.customers = [];
            state.error = "";
        })

        builder.addCase(fetchAllCustomers.fulfilled, (state, action) => {
            state.loading = false;
            state.customers = action.payload;
            state.error = "";
        })

        builder.addCase(fetchAllCustomers.rejected, (state, action) => {
            state.loading = false;
            state.customers = [];
            state.error = action.error.message;
        })

        //insert cases
        builder.addCase(addNewCustomer.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(addNewCustomer.fulfilled, (state, action) => {
            state.loading = false;
            state.customers.push(action.payload);
            state.error = "";
        })

        builder.addCase(addNewCustomer.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        //delete cases
        builder.addCase(deleteCustomer.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(deleteCustomer.fulfilled, async (state, action) => {
            state.loading = false;
            state.customers = state.customers.filter(customer => customer.id !== action.payload);

            state.error = "";

        })

        builder.addCase(deleteCustomer.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })


    }
})


export default customerSlice.reducer;