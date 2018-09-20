import { takeEvery, spawn, all } from "redux-saga/effects";

import {allListSaga} from './sagaAllList';
import {fetchRandomSaga} from './sagaFetchList';
import {persistSaga} from './sagaPersist';
import {removeDataSaga} from './removeDataSaga';
import {addDataSaga} from './sagaAddData';

import * as actionTypes from '../helpers/actionTypes';

export function* rootSaga() {
    yield takeEvery(actionTypes.FIRST_SAGA, workerSaga)
};

function* workerSaga() {
    yield all ([
        spawn(allListSaga),
        spawn(fetchRandomSaga),
        spawn(persistSaga),
        spawn(removeDataSaga),
        spawn(addDataSaga),

    ])
}