import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    store.run = sagaMiddleware.run;
    return store;

}
