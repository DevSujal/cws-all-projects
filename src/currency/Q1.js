import React, { Component } from 'react'
import TodosItem from './TodosItem'

export default class Q1 extends Component {
    constructor(){
        super();
        this.state={
            name:"",date:"",counter:0
        }
    }
    render() {
        let mystyle = {
            boxShadow : "0 4px 8px 0 black",
            width : "500px",
            margin : "10% 0 0 33%",
            padding : "10px",
            borderRadius : "10px",
            backgroundColor : "wheat"
        }
        return (
      <div style={mystyle}>
        <h1 className='text-center'>Todos List</h1>
        <br></br>
        <input type='text' onChange={(event)=>{this.setState({name:event.target.value})}}/>
        <input type='date' onChange={(event)=>{this.setState({date:event.target.value})}}/>
        <button className='btn btn-success mx-3' onClick={()=>{this.setState({counter:this.state.counter+1})}}>Add</button>
        <br></br>
        <ul>
            {this.state.counter>0 && <TodosItem name={this.state.name} date={this.state.date} /> }
            {this.state.counter>1 && <TodosItem name={this.state.name} date={this.state.date} /> }
            {this.state.counter>2 && <TodosItem name={this.state.name} date={this.state.date} /> }
            {this.state.counter>3 && <TodosItem name={this.state.name} date={this.state.date} /> }
        </ul>
      </div>
    )
  }
}