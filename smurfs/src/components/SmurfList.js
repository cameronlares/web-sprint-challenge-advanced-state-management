import React from "react";
import Smurf from './smurf'
import { connect } from "react-redux";

const SmurfList = (props) => {
  return (
    //When we invoke a function we pass it in anonymously
    <div>
      {props.state.map((smurf) => (
        <Smurf
          // key={smurf.id}
          smurf={smurf}
        />
      ))}
    
    </div>
  );
};

// export default SmurfList;


const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    state: state.smurfList,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(SmurfList);