import { combineReducers } from 'redux';
import fetchDisplayList from './fetchDisplayList';
import fetchDisplayAll from './fetchDisplayAll';
import persistFavorites from './persistFavorites';

import firstSaga from './firstSaga';


const combinedReducers = combineReducers ({
    fetchDisplayList, fetchDisplayAll, persistFavorites, firstSaga,
});

export default combinedReducers;