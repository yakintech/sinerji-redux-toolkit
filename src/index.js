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


  



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    counter: counterReducer,
    favorite: favoriteReducer,
    customers: customerReducer,
    [todoApi.reducerPath]: todoApi.reducer,
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
