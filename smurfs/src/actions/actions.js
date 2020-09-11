import axios from 'axios'
export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCESS = 'FETCH_SMURF_SUCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'
export const ADD_SMURF = 'ADD_SMURF'

//Action Creators 

export const fetchSmurfs = () => {
    return dispatch => {


        axios
            .get("http://localhost:3333/smurfs")
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: FETCH_SMURF_SUCESS,
                    payload: res.data
                    
                }) 
            })
            .catch(err => {
                dispatch({
                    type: FETCH_SMURF_FAILURE,
                    payload: err.message
                })
            })

    }
}

export const addSmurf = newSmurf => dispatch => {

    axios.post('http://localhost:3333/smurfs/',newSmurf)

        .then(res => {
            console.log(res.data);

            dispatch({
                type: ADD_SMURF,
                payload:res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_SMURF_FAILURE,
                payload: err.message
            });
        })
}
