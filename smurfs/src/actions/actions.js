import axios from 'axios'
import smurf from '/Users/cameronlares/Desktop/LambdaAssignments/Unit_3/Week_2/web-sprint-challenge-advanced-state-management/server.js'
export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCESS = 'FETCH_SMURF_SUCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'
export const ADD_SMURF = 'ADD_SMURF'

//Action Creators 

export const fetchSmurfs = () => {
    return dispatch => {
                //1st dispatch an isLoading action

dispatch({ type: FETCH_SMURF_START})
        //2nd - do the async operation

        axios
        .get("http://localhost:3333/smurfs")
        .then(res=> {
            dispatch({ type:FETCH_SMURF_SUCESS, payload: res.data}) //fetching smurfs
        })
        .catch(err =>{
            dispatch({ type: FETCH_SMURF_FAILURE, payload: err.message})
        })
//ADD SMURF


    }
}

export const addSmurf = (newSmurf) => {
    return dispatch => {
axios
.post('http://localhost:3333/smurfs', {
    dispatch ({type: ADD_SMURF, payload:newSmurf})
})
.then(res=>{
    console.log(res.data)
})
.catch(err =>{
    dispatch({ type: FETCH_SMURF_FAILURE, payload: err.message})
})
    }
}