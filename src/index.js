import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './store/slices/counterSlice';
import favoriteReducer from './store/slices/favoritesSlice';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    counter: counterReducer,
    favorite: favoriteReducer,
  },
});


root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
