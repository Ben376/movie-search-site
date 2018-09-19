import * as actionTypes from '../helpers/actionTypes';

const initialState = {
    allList: [],
    error: [],
};

const fetchDisplayAll = (state = initialState, action) => {   
        switch (action.type) {
            case actionTypes.FETCH_DISPLAY_ALL_LIST :
                return {
                    ...state,
                    allList: action.payload,
                }
            case actionTypes.FETCH_ERROR_ALL_LIST : 
                return {
                    ...state,
                    error: action.payload,
                }
            default :
                return state;
        }
};

export default fetchDisplayAll;