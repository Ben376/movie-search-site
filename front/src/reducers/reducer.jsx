const initialState = {
    value: 0,
    text: 'hallo',
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'ADD' :
                return {
                    ...state,
                    value: state.value + action.value,
                }
            case 'DELETE' : 
                return {
                    ...state,
                    value: state.value - 10,
                }
            default :
                return state;
        }
}

export default reducer;