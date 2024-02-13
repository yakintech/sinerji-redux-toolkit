import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    favorites: []
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        addFavorite: (state, action) => {

            if (state.favorites.find(favorite => favorite.id === action.payload.id)) {
                return;
            }

            state.favorites.push(action.payload);
        },
        removeFavoriteAction: (state, action) => {
            state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload.id);
        },
        emptyFavorites: (state) => {
            state.favorites = [];
        }   
    }
});

export const { addFavorite, removeFavoriteAction, emptyFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;