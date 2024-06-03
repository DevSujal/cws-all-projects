import React from 'react';

class Practical6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      favoritecolor : "yellow"
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol}
    }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return window.confirm("Should Changes be done!");
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1>favourite color : {this.props}</h1>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleButtonClick}>Increment</button>
      </div>
    );
  }
}

export default Practical6;
