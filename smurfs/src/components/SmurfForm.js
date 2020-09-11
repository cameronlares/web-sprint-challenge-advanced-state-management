import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf, ADD_SMURF } from "../actions/actions";
import SmurfList from "./SmurfList";
import { reducer } from "../reducers/reducer";
import { useState } from "react";

const SmurfForm = (props) => {
  const initialValue = {
    name: "",
    age: "",
    height: "",
  };

  const [inputSmurf, setSmurf] = useState(initialValue);

  const handleChanges = (e) => {
    setSmurf({
      ...inputSmurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(inputSmurf);
    setSmurf();
  };

  // useEffect(() => {
  //   //call the action creator

  //   props.fetchSmurfs();
  //   props.addSmurf();
  // }, []);

  return (
    <div>
      {/* {props.id && <h4> Loading smurf data...</h4>}
      {props.error && (
        <p className="error"> "No Smurf Loading" {props.error}</p>
      )} */}

      <div>
        <div className="smurf-list">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Smurf Name</label>
            <input
              autoComplete="off"
              id="name"
              name="name"
              type="text"
              placeholder="name"
              value={inputSmurf.name}
              onChange={handleChanges}
            />

            <label htmlFor={"age"}>Smurf Age</label>
            <input
              autoComplete="off"
              id="age"
              name="age"
              type="text"
              placeholder="Smurf age"
              value={inputSmurf.age}
              onChange={handleChanges}
            />

            <label htmlFor={"height"}>Smurf height</label>
            <input
              autoComplete="off"
              id="height"
              name="height"
              type="text"
              value={inputSmurf.height}
              placeholder="enter smurf height"
              onChange={handleChanges}
            />
            <button> ADD SMURF </button>
          </form>

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

export default connect(null, { addSmurf })(SmurfForm);
