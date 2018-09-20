import * as actionTypes from '../helpers/actionTypes';

const inititialState = {
    persistList: [],
};

const persistFavorites = (state = inititialState, action) => {   
        switch (action.type) {
            case actionTypes.PERSIST_MOVIE_SUCCESS : 

                let newPersistList = state.persistList;
                let listUpdated;
                let verify = newPersistList.find(function (obj) { return obj.ID === action.data.ID});

                if (verify) {
                    listUpdated = newPersistList;
                } else {
                    listUpdated = newPersistList.concat(action.data);
                }

                return {
                    ...state,
                    persistList: listUpdated,
                }

            case actionTypes.PERSIST_MOVIE_REMOVE : 

                let removedItem = state.persistList.filter(deleted => 
                    deleted.ID !== action.id);

                return {
                    ...state,
                    persistList: removedItem,
                }
                
            default :
                return state;
        }
};

export default persistFavorites;