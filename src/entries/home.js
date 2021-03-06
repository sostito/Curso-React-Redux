import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import data from '../api.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../reducers/index'
import { Map as map } from 'immutable';

import data from '../schemas/index'

const initialState = {
    data: {
        entities: data.entities,
        categories: data.result.categories,
        search: []
    },
    modal: {
        visibility: false,
        mediaId: null
    }
};


const store = createStore(
    reducer,
    map(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
const homeContainer = document.getElementById('home-container')

// le hereda cosas a los componentes hijos
render(
    <Provider store={store}>
        <Home />
    </Provider>
, homeContainer);

