import {call, put, takeLatest} from "redux-saga/effects";
import axios from 'axios';

import * as actionTypes from '../helpers/actionTypes';

export function* allListSaga() {    
    yield takeLatest(actionTypes.FETCH_REQ_ALL_LIST, workerSaga);
};

export const fetchingDisplayAllList = () => {
    return axios.get('/sql/list');
};

function* workerSaga() {    
    try {
      const response = yield call(fetchingDisplayAllList);
      const payload = response.data;
      
      yield put({ type: actionTypes.FETCH_DISPLAY_ALL_LIST, payload });

    } catch (error) {

      yield put({ type: actionTypes.FETCH_ERROR_ALL_LIST, error });
    }

}
