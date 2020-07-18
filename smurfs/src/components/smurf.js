import React from "react";

const Smurf = (props) => {
  return (
    <div>
      <p>Name:{props.smurf.name}Age:{props.smurf.age}Height:{props.smurf.height}</p>
    </div>
  );
};

export default Smurf;
