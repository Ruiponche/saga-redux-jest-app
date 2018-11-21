import React from 'react'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import layoutReducers from '../reducers/layoutReducers';
import holidaysReducers from '../reducers/holidaysReducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({layout: layoutReducers, holidays: holidaysReducers}),
    composeEnhancer(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)