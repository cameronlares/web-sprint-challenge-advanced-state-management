import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf, ADD_SMURF } from "../actions/actions";
import SmurfList from "./SmurfList";
import { reducer } from "../reducers/reducer";

const SmurfForm = (props) => {
  useEffect(() => {
    //call the action creator

    props.fetchSmurfs();
    props.addSmurf();
  }, []);

  return (
    <div>
      {/* {props.id && <h4> Loading smurf data...</h4>}
      {props.error && (
        <p className="error"> "No Smurf Loading" {props.error}</p>
      )} */}

      <div>
        <div className="smurf-list">
          {/* <form>
            <label htmlFor={props.name}>Smurf Name</label>
            <input
              autoComplete="off"
              type="text"
       
              value={props.name}
            />
         

            <label htmlFor={props.age}>Smurf Age</label>
            <input autoComplete="off" type="text" value={props.age} />

        

            <label htmlFor={props.age}>Smurf height</label>
            <input autoComplete="off" type="text" value={props.height} />
            <button> ADD SMURF </button>
          </form> */}

          {/* 
//Display B Smurf */}
        </div>
        <SmurfList state={props.smurfList} />
      </div>
    </div>
  );
}; //end smmurflist

const mapStateToProps = (state) => {
  console.log(state.smurfList);
  return {
    isLoading: state.isLoading,
    error: state.error,
    name: state.smurfList.name,
    age: state.smurfList.age,
    height: state.smurfList.height,
    smurfList: state.smurfList,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(SmurfForm);
// export default connect(mapStateToProps,{})(SmurfForm);
