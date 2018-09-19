import * as actionTypes from '../helpers/actionTypes';

const inititialState = {
    persistList: [],
};

const persistFavorites = (state = inititialState, action) => {   
        switch (action.type) {
            case actionTypes.PERSIST_MOVIE_SUCCESS : 

            let newPersistList = state.persistList;
            let listUpdated;

            if (newPersistList.includes(action.data.title)) {
                listUpdated = newPersistList;
            } else {
                listUpdated = newPersistList.concat(action.data.title);
            }

                return {
                    ...state,
                    persistList: listUpdated,
                }
            case actionTypes.PERSIST_MOVIE_REMOVE : 
                return {
                    ...state,
                    persistList: '',
                }
            default :
                return state;
        }
};

export default persistFavorites;