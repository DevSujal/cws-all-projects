import React, { Component } from "react";

export default class TodosItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      date: this.props.date,
      editTask: false,
      delter: true,
    };
  }

  render() {
    let mystyle = {
      display : "flex",
      flexDirection : "row",
      margin : "5px"
    }
    return (
      <div>
        {this.state.delter && (
          <div style={mystyle}>
            <li>
              {this.state.name} {this.state.date}
            </li>
            <button
              className="btn btn-primary mx-3"
              onClick={() => {
                this.setState({ editTask: true });
              }}
            >
              edit
            </button>
            {this.state.editTask && (
              <form>
                <input
                  type="text"
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                ></input>
                <input
                  type="date"
                  onChange={(event) => {
                    this.setState({ date: event.target.value });
                  }}
                ></input>
                <button
                  className="btn btn-success mx-3"
                  onClick={() => {
                    this.setState({ editTask: false });
                  }}
                >
                  submit
                </button>
              </form>
            )}
            <button
              className="btn btn-danger mx-3"
              onClick={() => {
                this.setState({ delter: false });
              }}
            >
              delete
            </button>{" "}
          </div>
        )}
      </div>
    );
  }
}
