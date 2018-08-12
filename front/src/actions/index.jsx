import * as actionTypes from '../helpers/actionTypes'

export const fetchingDisplayData = api => {
    return dispatch => {
        fetch(api).then(res => 
            res.json()).then(res => 
                dispatch(fetchDisplaySuccess(res))).catch(error => 
                    dispatch(fetchDisplayError(error)));
    }
}

export const fetchingAddData = (api, form) => {
    return dispatch => {
        fetch(api, {
            method: 'POST',
            headers: new Headers({'Content-Type':'application/json'}),
            body: form,
        }).then(res => 
            res.json()).then(res => 
                dispatch(fetchDisplaySuccess(res)),
                document.querySelector('form').reset()
            ).catch(error => 
                    dispatch(fetchDisplayError(error)));
    }
}

export const fetchingDeleteData = (api, form) => {
    return dispatch => {
        fetch(api, {
            method: 'DELETE',
            headers: new Headers({'Content-Type':'application/json'}),
            body: form,
        }).then(res => 
            res.json()).then(res => 
                dispatch(fetchDisplaySuccess(res)),
            ).catch(error => 
                    dispatch(fetchDisplayError(error)));
    }
}

export const fetchDisplaySuccess = payload => {
    return {
        type: actionTypes.FETCH_DISPLAY,
        payload,
    }
}

export const fetchDisplayError = payload => {
    return {
        type: actionTypes.FETCH_ERROR,
        payload,
    }
}