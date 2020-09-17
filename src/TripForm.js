import React from "react";


class TripForm extends React.Component {
  state = { name: "", city:"",  state:""};

 
handleSubmit = (e) => {
  e.preventDefault();
  this.setState({
    name: "",
    city: "",
    state: "",
  });
  this.props.addTrip(this.state);
};
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};


render(){
  const{ name,city,state} = this.state;
  return(
    <form onSubmit={this.handleSubmit}>
      <label> Name of Trip:</label>
      <input  required type="text" name="name" value={name} onChange={this.handleChange}></input>
      <label>City:</label>
      <input required type="text" name="city" value={city} onChange={this.handleChange}></input>
      <label>State:</label>
      <input required type="text" name="state" value={state} onChange={this.handleChange}></input>
      <br />
      <br />
      <button onClick={this.handleSubmit}>Submit</button>
    </form>
  )
}




}



export default TripForm;