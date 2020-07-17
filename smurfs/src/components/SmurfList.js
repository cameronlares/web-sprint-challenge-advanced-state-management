import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchSmurfs,addSmurf, ADD_SMURF} from '../actions/actions'

const SmurfList = props => {

    useEffect(() => {
        //call the action creator 

        props.fetchSmurfs();
        props.addSmurf();
    },[]);


return (

    <div>

{props.id && <h4> Loading smurf data...</h4>}
{props.error && (
    <p className = "error"> "No Smurf Loading" {props.error}</p>
)}


<div className = "smurf-list">

    <form>

    <input 
    autoComplete = "off"
    type = "text"
    name = {props.name}

    />
    
    <button> ADD SMURF </button>  
        
    </form>

{props.smurfList.map(smurf=>(
  <p key={smurf.id}>{props.name}</p>
))}

</div>
    </div>

)

} //end smmurflist

const mapStateToProps = state => {
    return {
        name: state.name,
        age:state.age,
        height:state.height,
        id:state.id
    }
}

export default connect (mapStateToProps, {fetchSmurfs,addSmurf})(SmurfList)