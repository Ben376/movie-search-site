import * as actionTypes from '../helpers/actionTypes';

const addData = (state = [], action) => {   
        switch (action.type) {
            case actionTypes.REQ_ADD_DATA :                                   
                return {
                    ...state,
                }

            default :
                return state;
        }
};

export default addData;