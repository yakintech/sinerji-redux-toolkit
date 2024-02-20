import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './store/slices/counterSlice';
import favoriteReducer from './store/slices/favoritesSlice';
import { BrowserRouter } from 'react-router-dom';
import customerReducer from './store/slices/customerSlice';
import { todoApi, useGetTodosQuery } from './services/todoService';
import cartReducer from './store/slices/cartSlice';
import userReducer from './store/reducers/userReducer';
  



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    counter: counterReducer,
    favorite: favoriteReducer,
    customers: customerReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    cart: cartReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});


root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
