import { takeEvery, spawn, all } from "redux-saga/effects";

import {allListSaga} from './sagaAllList';
import {fetchRandomSaga} from './sagaFetchList';
import {persistSaga} from './sagaPersist';

import * as actionTypes from '../helpers/actionTypes';

export function* rootSaga() {
    yield takeEvery(actionTypes.FIRST_SAGA, workerSaga)
};

function* workerSaga() {
    yield all ([
        spawn(allListSaga),
        spawn(fetchRandomSaga),
        spawn(persistSaga),

    ])
}