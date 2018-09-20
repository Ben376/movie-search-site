import * as actionTypes from '../helpers/actionTypes';

const initialState = {
    form : {
        title : '', 
        year : '',
        runtime : '',
        genre : 'Horror', 
        director : '',
        actors:'', 
        plot: '', 
        posterUrl: '', 
        errorMessage: '',
    }, error: [],
}

const handleChange = (state = initialState, action) => {   
        switch (action.type) {
            case actionTypes.HANDLE_CHANGE_SUCCESS :  
            console.log('action event', action.payload);
            
/*             if (e.target.name === 'year' || e.target.name === 'runtime') {
                let numberInput = e.target.value;
                numberInput = numberInput.replace(/[^0-9]/g, "");
                e.target.value = numberInput;
            }
          
            if (e.target.name === 'year') {
              if (e.target.value.length && e.target.value.length < 4) {
                this.setState({ errorMessage: true });
              } else {
                this.setState({ errorMessage: false });      
              }
            } */

                return {
                    ...state,
                    form: action.payload,
                }

            case actionTypes.HANDLE_CHANGE_ERROR :                                   
                return {
                    ...state,
                    error: action.payload,
                }

            default :
                return state;
        }
};

export default handleChange;