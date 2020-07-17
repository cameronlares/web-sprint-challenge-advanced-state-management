import React from "react";
import Smurf from "./smurf";

const SmurfList = (props) => {
  return (
    //When we invoke a function we pass it in anonymously

    <div className="smurf-list">
      {props.smurfList.map((smurfs) => (
        <Smurf key={smurf.id} smurfs={smurfs} />
      ))}
    </div>
  );
};

export default SmurfList;
