import React, { Component } from "react";
import image from "../images/download.jpg";

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>This is my details using Class component</h1>
          <center>
            <table border={5}>
              <tbody>
                <tr>
                  <th>Name : </th>
                  <th>sujal</th>
                </tr>
                <tr>
                  <th>Branch : </th>
                  <th>cse</th>
                </tr>
                <tr>
                  <th>Year : </th>
                  <th>1st</th>
                </tr>
                <tr>
                  <th>Image : </th>
                  <th>
                    <img src={image} alt="" />
                  </th>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
      </div>
    );
  }
}
