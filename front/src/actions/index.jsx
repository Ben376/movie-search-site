import * as actionTypes from '../helpers/actionTypes';

export const actionDatabaseRemove = id => {     
    return {
        type: actionTypes.REQ_DELETE_DATA,
        id,
    }
};

export const actionDatabaseAdd = form => {         
    return {
        type: actionTypes.REQ_ADD_DATA,
        form,
    }
};

export const actionDisplayRandomList = payload => {    
    return {
        type: actionTypes.FETCH_REQ_LIST,
        payload,
    }
};

export const actionDisplayAllList = payload => {    
    return {
        type: actionTypes.FETCH_REQ_ALL_LIST,
        payload,
    }
};

export const actionPersistMovie = id => {    
    return {
        type: actionTypes.PERSIST_MOVIE_REQ,
        id,
    }
};

export const actionFirstSaga = payload => {    
    return {
        type: actionTypes.FIRST_SAGA,
        payload,
    }
};

export const actionPersistRemove = id => {        
    return {
        type: actionTypes.PERSIST_MOVIE_REMOVE,
        id,
    }
};

export const actionHandleChange = e => {   
    console.log('entering action change', e);
         
    return {
        type: actionTypes.HANDLE_CHANGE_SUCCESS,
        e,
    }
};