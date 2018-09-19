import * as actionTypes from '../helpers/actionTypes';

const firstSaga = (state = [], action) => {   
        switch (action.type) {
            case actionTypes.FIRST_SAGA :                        
                return {
                    ...state,
                }
            default :
                return state;
        }
};

export default firstSaga;