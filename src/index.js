import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './components/WrapComponent';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import popupSlice from './store/popupSlice';
import cntSlice from './store/cntSlice';

const store = configureStore({
    reducer : {
        popupSlice,
        cntSlice
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <WrapComponent/>
    </Provider>
);
