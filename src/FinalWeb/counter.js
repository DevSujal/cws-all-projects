import React, { Component } from 'react'

export default class Counter extends Component {

  constructor(props){
    super(props);
  }

    state = {count : 2}

    onIncreament(){
        this.state.count *= 2;

        this.setState(
            {
                count : this.state.count
            }

        )
        console.log(this.state.count)

    }
  render() {
    let style1 = {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      backgroundColor : "lightBlue",
      color : "black",
      textAlign : "center",
      padding : "10px",
      border : "none",
      borderRadius : "10px",
      position : "absolute",
      margin : "10% 0 0 36%",
      width : "400px",
      
    }

    return (
      <div style={style1}>
        <h1>count = {this.state.count}</h1><hr />
        <button className='btn btn-primary my-2' onClick = { ()=> this.onIncreament()}>Increament</button>
      </div>
    )
  }
}
