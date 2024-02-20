import { createReducer, createAction } from "@reduxjs/toolkit";



export const addNewUserAction = createAction("addNewUser");
export const deleteUserAction = createAction("deleteUser");
export const updateUserAction = createAction("updateUser");


let initialState = {
    users: [{
        id: 1,
        name: "John Doe",
        email: "john@mail.com"
    }],
    loading: false,
    error: ""
}

const userReducer = createReducer(initialState, builder => 
    builder
        .addCase(addNewUserAction, (state, action) => {
            state.users = [...state.users, action.payload]
        })
        .addCase(deleteUserAction, (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id)
        })
        .addCase(updateUserAction, (state, action) => {
            state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user)
        })
)

export default userReducer