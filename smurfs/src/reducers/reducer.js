import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCESS,
    ADD_SMURF,
    FETCH_SMURF_FAILURE
} from "../actions/actions"

const initialState = {
    name: '',
    age:'',
    height: '',
    id: ''
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_SMURF_START:
            return{
                ...state,
                name: action.payload,
                age: action.payload,
                height: action.payload,
                id: Date.now(),
            };
            case ADD_SMURF:
                return {
                    ...state,
                    name: action.payload,
                    age: action.payload,
                    height: action.payload,
                    id: Date.now(),
                    
                };
            default:
                return state;
            
    }
}