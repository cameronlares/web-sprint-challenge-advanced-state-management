import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCESS,
    ADD_SMURF,
    FETCH_SMURF_FAILURE
} from "../actions/actions"

const initialState = {
    isLoading:false,
   smurfList:[],
   error:""
}
console.log(initialState.smurfList)

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_SMURF_SUCESS:
            return{
                ...state,
                isLoading: false,
                smurfList: action.payload,
                error: ""
            };
            case ADD_SMURF:
                return {
                    ...state.smurfList,
                      name: action.payload,
                        age: action.payload,
                        height: action.payload,
                        id: Date.now()

                    
                };
            default:
                return state;
            
    }
}