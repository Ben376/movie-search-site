import {call, put, takeLatest} from "redux-saga/effects";
import axios from 'axios';

import * as actionTypes from '../helpers/actionTypes';

export function* fetchRandomSaga() {
    yield takeLatest(actionTypes.FETCH_REQ_LIST, workerSaga)
};

export const fetchingDisplayData = () => {
    return axios.get('/sql/random');
};

function* workerSaga() {
    try {
      const response = yield call(fetchingDisplayData);
      const payload = response.data;

      yield put({ type: actionTypes.FETCH_DISPLAY_LIST, payload });

    } catch (error) {

      yield put({ type: actionTypes.FETCH_ERROR_LIST, error });
    }
}

