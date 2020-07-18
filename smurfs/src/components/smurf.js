import React from "react";

const Smurf = (props) => {
  return (
    <div>
      <p>{props.name}{props.age}{props.height}</p>
    </div>
  );
};

export default Smurf;
