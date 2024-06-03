import React, { Component } from 'react'

export default class Out extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteColor: "red"
        }
    }
    componentDidMount = () => {
      this.changeColor = setTimeout(() => {
            this.setState({favouriteColor : "black"})
          }, 5000)
    }

    componentDidUpdate(){
        document.getElementById("mydiv").innerHTML = "my favourite color is updated";
    }

    // componentWillUnmount = () => {
    //     // this.setState({favouriteColor : "red"})
    // }
    
    
    
    render() {
        return (
            <div>
                <center className='my-5'>
                <h1 id='mydiv' className='my-5'></h1>
                <h1 className='my-5'>My Favourite Color is : {this.state.favouriteColor}</h1>
                </center>
            </div>
        )
    }
}
