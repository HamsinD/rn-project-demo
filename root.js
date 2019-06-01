import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import rootSaga from './redux/sagas';
import MainTabNav from './mainNavigator';

const store = configureStore();
store.run(rootSaga);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainTabNav/>
            </Provider>
        );
    }
}