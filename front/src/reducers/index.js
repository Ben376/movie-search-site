import { combineReducers } from 'redux'
import fetchReducer from './reducer'

const combinedReducers = combineReducers ({
    fetchReducer,
});

export default combinedReducers;