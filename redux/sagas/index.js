import { all } from 'redux-saga/effects';
import shootSaga from './shootSaga';

export default function* rootSaga() {
    yield all([
        shootSaga(),
    ]);
}