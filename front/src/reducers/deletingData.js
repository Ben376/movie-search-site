import * as actionTypes from '../helpers/actionTypes';

const deletingData = (state = [], action) => {   
        switch (action.type) {
            case actionTypes.REQ_DELETE_DATA :                                   
                return {
                    ...state,
                }

            default :
                return state;
        }
};

export default deletingData;