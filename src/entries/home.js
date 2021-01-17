import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    data: {
        ...data
    }
};


const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
const homeContainer = document.getElementById('home-container')

// le hereda cosas a los componentes hijos
render(
    <Provider store={store}>
        <Home />
    </Provider>
, homeContainer);

