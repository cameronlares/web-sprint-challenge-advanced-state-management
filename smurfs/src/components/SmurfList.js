import React from "react";
import Smurf from './smurf'

const SmurfList = (props) => {
  return (
    //When we invoke a function we pass it in anonymously
    <div>
      {props.state.map((smurf) => (
        <Smurf
          key={smurf.id}
          smurf={smurf}
        />
      ))}
    
    </div>
  );
};

export default SmurfList;

