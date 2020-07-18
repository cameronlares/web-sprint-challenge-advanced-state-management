import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";

import { fetchSmurfs, addSmurf, ADD_SMURF } from "../actions/actions";

import SmurfForm from './SmurfForm'
const App = (props) => {
    useEffect(() => {
      //call the action creator
  
      props.fetchSmurfs();
      props.addSmurf();
    }, []);

    return (
      <div className="App">
    
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
        <SmurfForm/>
      </div>
    );
  
}

// export default App;
export default connect(null, { fetchSmurfs,addSmurf })(App);
