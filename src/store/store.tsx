
import { configureStore } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory, History } from 'history'
import { applyMiddleware, compose, Middleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root_saga";
import rootReducer, { history } from "./root_reducers";

const middlewares: Middleware[] = []


const routeMiddleware = routerMiddleware(history)
middlewares.push(routeMiddleware)

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware)

//compose(applyMiddleware(middlewares))

const store = configureStore(
    {
        reducer:rootReducer(),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(middlewares)});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export default store;