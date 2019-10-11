import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* rootSaga() {
    yield takeEvery('FETCH_ITEM', fetchItem);
    yield takeEvery('FETCH_MENU', fetchMenu);
}

function* fetchItem() {
    try {
        const response = yield axios.get('/item');
        yield put({ type: 'GET_ITEM', payload: response.data })
    } catch (error) {
        console.log('Error in fetchItem:', String(error));   
    }
}

function* fetchMenu() {
    try {
        const response = yield axios.get('/item/menu');
        console.log(response.data);
        
        yield put({ type: 'GET_MENU', payload: response.data })
    } catch (error) {
        console.log('Error in fetchMenu:', error);
    }
}

// Reducer for items
const item = (state = [], action) => {
    switch (action.type) {
        case 'GET_ITEM':
            return action.payload;
        default:
            return state;
    }
}

// Reducer for the menu
const menu = (state=[], action) => {
    switch (action.type) {
        case 'GET_MENU':
             return action.payload;   
        default:
            return state;
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        item,
        menu
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));