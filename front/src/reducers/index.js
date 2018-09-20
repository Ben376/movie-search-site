import { combineReducers } from 'redux';

import fetchDisplayList from './fetchDisplayList';
import fetchDisplayAll from './fetchDisplayAll';
import persistFavorites from './persistFavorites';
import deletingData from './deletingData';
import addData from './deletingData';
import firstSaga from './firstSaga';
import handleChange from './handleChange';

const combinedReducers = combineReducers ({
    fetchDisplayList, 
    fetchDisplayAll, 
    persistFavorites, 
    firstSaga, 
    deletingData, 
    addData,
    handleChange,
});

export default combinedReducers;