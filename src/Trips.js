import React from "react";
import Trip from "./Trip";


const Trips = ({trips, remove}) => {
  return(
  <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>City</th>
      <th>State</th>
    </tr>
    </thead>
    <tbody>
  {
    trips.map((trip) => (
      <Trip key={trip.id} {...trip} remove={remove}/>
    ))
  }
</tbody>
</table>
  )
}

export default Trips;