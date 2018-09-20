import {call,takeLatest} from "redux-saga/effects";
import axios from 'axios';

import * as actionTypes from '../helpers/actionTypes';

export function* addDataSaga() {
  yield takeLatest(actionTypes.REQ_ADD_DATA, workerSaga)
};

export const addingData = (form) => {
  console.log('form', form);
  
  return axios.post('/sql/add', JSON.parse(form));
};

function* workerSaga(form) {    
    yield call(addingData, form.form);
}
