import {call,takeLatest} from "redux-saga/effects";
import axios from 'axios';

import * as actionTypes from '../helpers/actionTypes';

export function* removeDataSaga() {
    yield takeLatest(actionTypes.REQ_DELETE_DATA, workerSaga)
};

export const deletingData = id => {
    return axios.delete(`/sql/delete/${id.id}`);
};

function* workerSaga(id) {
      yield call(deletingData, id);
}
