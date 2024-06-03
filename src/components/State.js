import React, { Component } from 'react'

export default class State extends Component {

  constructor(props) {
    super(props);
    this.state = {branch : "CSE"};
  }
  render() {
    return (
      <div>
        <h1>My Branch is {this.state.branch}</h1>
      </div>
    )
  }
}
