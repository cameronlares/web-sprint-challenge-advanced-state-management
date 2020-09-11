import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCESS,
  ADD_SMURF,

} from "../actions/actions";

const initialState = {
  isLoading: false,
  smurfList: [],
  error: "",
};
console.log(initialState.smurfList);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        smurfList: action.payload,
        error: "",
      };

    case ADD_SMURF:
      console.log(action.payload);

      return {
        ...state,
        smurfList: [...state.smurfList, action.payload],
      };
    default:
      return state;
  }
};
