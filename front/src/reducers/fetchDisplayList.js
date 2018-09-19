import * as actionTypes from '../helpers/actionTypes';

const initialState = {
    list: [],
    error: [],
};

const fetchDisplayList = (state = initialState, action) => {   
        switch (action.type) {
            case actionTypes.FETCH_DISPLAY_LIST :                        
                return {
                    ...state,
                    list: action.payload,
                }
            case actionTypes.FETCH_ERROR_LIST : 
                return {
                    ...state,
                    error: action.payload,
                }
            default :
                return state;
        }
};

export default fetchDisplayList;