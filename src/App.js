import React, { Component } from 'react';
import './App.css';
import Trips from "./Trips"

class App extends Component {
  state= {
    trips:[
      {id:1, name:"Climb the Grand", city:"Jackson", state:"WY",},
      {id:2, name:"North Circle Trail", city:"East Glacier", state:"MT",},
      {id:3, name:"MTB Mckenzie River", city:"Sisters", state:"OR",},
    ]
  }




  render() {
    return (
      <div>
        <h1>Vacation List</h1>
        <Trips trips={this.state.trips}/>
      </div>
    );
  }
}

export default App;