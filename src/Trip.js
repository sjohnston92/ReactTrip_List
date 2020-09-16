import React from "react";

const Trip =({ name,city,state,id, remove, }) => (
  
  <tr>
  <td>{name}</td>
  <td>{city}</td>
  <td>{state}</td>
  <td>
    <button onClick={() => remove(id)}>
      Delete
    </button>
  </td>
</tr> 
);

export default Trip;
