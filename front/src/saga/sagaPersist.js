import {put, takeLatest} from "redux-saga/effects";

import * as actionTypes from '../helpers/actionTypes';

export function* persistSaga() {
    yield takeLatest(actionTypes.PERSIST_MOVIE_REQ, workerSaga)
};

function* workerSaga(id) {

  const data = id.id;
  yield put({type: actionTypes.PERSIST_MOVIE_SUCCESS, data});

}