import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf, ADD_SMURF } from "../actions/actions";
import SmurfList from './SmurfList'

const SmurfForm = (props) => {
  useEffect(() => {
    //call the action creator

    props.fetchSmurfs();
    props.addSmurf();
  }, []);

  return (
    <div>
      {props.id && <h4> Loading smurf data...</h4>}
      {props.error && (
        <p className="error"> "No Smurf Loading" {props.error}</p>
      )}

      <div>
        <div className="smurf-list">

          <SmurfList smurfList={props.state} name={props.name} height={props.height} age={props.age}/>




          <form onSubmit={props.addSmurf(props.newSmurf)}>
            <label htmlFor={props.name}>Smurf Name</label>
            <input
              autoComplete="off"
              type="text"
              //   name={props.name}
              value={props.name}
            />
            {/* New Smurf Label */}

            <label htmlFor={props.age}>Smurf Age</label>
            <input autoComplete="off" type="text" value={props.age} />

            {/* New Smurf Label */}

            <label htmlFor={props.age}>Smurf height</label>
            <input autoComplete="off" type="text" value={props.height} />
            <button> ADD SMURF </button>
          </form>

          {/* 
//Display B Smurf */}

          <p>{props.smurfList}</p>
        </div>
        {/* {props.smurfList.map((smurf) => (
          <p key={smurf.id}>{props.name}</p>
        ))} */}
      </div>
    </div>
  );
}; //end smmurflist

const mapStateToProps = (state) => {
  console.log(state.smurfList);
  return {
    isLoading: state.isLoading,
    error: state.error,
    name: state.name,
    age: state.smurfList.age,
    height: state.smurfList.height,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(SmurfForm);
