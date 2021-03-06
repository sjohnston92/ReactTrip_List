import React, { Component } from 'react';
import './App.css';
import Trips from "./Trips"
import TripForm from "./TripForm"
import Airplane from './Airplane'


class App extends Component {
  state= {
    trips:[
      {id:1, name:"Climb the Grand", city:"Jackson", state:"WY",},
      {id:2, name:"North Circle Trail", city:"East Glacier", state:"MT",},
      {id:3, name:"MTB Mckenzie River", city:"Sisters", state:"OR",},
    ]
  }

  removeTrip = (id) => {
    const tripsRe = this.state.trips.filter(trip => {
      if (trip.id !== id)
      return trip
    });
    this.setState({trips: [...tripsRe],});
    };




  addTrip = (trip) => {
    console.log(trip);
    const newTrip = {...trip, id:Math.random() + ""};
    this.setState({
      trips: [newTrip, ...this.state.trips]
    });
  };


  render() {
    return (
      <div className="box">
        <h1>Vacation List</h1>
        <Trips 
        trips={this.state.trips}
        remove={this.removeTrip}
        />
        <br />
        <br />
        <br />
        <h2>Add Trip</h2>
        <TripForm addTrip={this.addTrip}/>
        <br/>
        <Airplane />
      </div>
    );
  }
}

export default App;