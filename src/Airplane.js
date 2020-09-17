import React from "react"
import flyboy from "./Flyboy.png"

console.log(flyboy)

class Airplane extends React.Component{
con
  state={
    xPos: 0,
    yPos: 0,
    dX: 10,
  }

  componentDidMount(){
    this.ticker = setInterval(this.tick, 100);

  }
  componentDidUpdate(prevProps, prevState){
    console.log(prevState)
    if(prevState.xPos >800){
      this.setState({
        dX: 0,
        xPos:0,
      })
    }
    if(prevState.xPos < 0){
      this.setState({
        dX: -10,
        xPos:1,
      })
    }
  }
  tick = ()=>{
    const{xPos, yPos,dX} = this.state;
    //want to change position
    this.setState({
      xPos:xPos + dX,
      yPos:yPos +1,
    })
  }
  render(){
    const{xPos,yPos}= this.state;
    return(
    <div style = {styles.box}>
      <div style={{...styles.airplane,top: yPos, left: xPos}}>
      <img src={flyboy} alt="Flyboy"/>
        </div>
    </div>
    );
  }
}

const styles = {
  airplane:{
    margin: 0,
    padding: 0,
    position:"absolute",
    color: "white",
    // top: "280px",
    // left:"275px",
  },
  box:{
    position: "relative",
    width: "100%",
    height:"100%",
  }
}

export default Airplane;