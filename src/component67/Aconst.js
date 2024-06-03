import React, { Component } from 'react'

export default class Aconst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favouriteColor: "red"
        }
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return { favouriteColor: nextProps.favcol }
    // }
    // componentDidMount = () => {
    //   for(let i = 0; i < 5; i++){
    //     setTimeout(() => {
    //         this.setState({favouriteColor : "blue"})
    //       }, 4000)
    //   }
    // }
    shouldComponentUpdate(){
        return true;
    }
    changeColor = () =>{
        if(this.state.favouriteColor === "red"){
            this.setState({favouriteColor : "black"})
        }else{
            this.setState({favouriteColor : "red"})
        }
    }
    
    render() {
        return (
            <div>
                <center>
                    <h1 className='my-5'>My Favourite color is : {this.state.favouriteColor}</h1>
                    <button type='buttun' className='btn btn-primary' onClick={this.changeColor}>change color</button>
                </center>
            </div>
        )
    }
}
