import React, { Component } from 'react'

export default class Abc extends Component {
    cunstructor(props){
        super(props)
        this.state = {show : true}
    }
    delHeader = () =>{
        this.setState({show : false})
    }
  render() {
    let me;
    if(this.state.show){
        me = <Child />
    };
    return (
      <div>
        <center>
        {me}
        <button onClick={this.delHeader}>Delete Header</button>
        </center>
      </div>
    )
  }
}


import React, { Component } from 'react'

 class Child extends React.Component {
    componentWillUnmount = () => {
      alert("component will be deleted")
    }
    
  render() {
    return (
      <div>
        <center><h1>Hello World</h1></center>
      </div>
    )
  }
}
