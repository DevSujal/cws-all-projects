import React from 'react'

export default function Students(props) {
  return (
    <div>
      <div>
      <h1>This is the use of props in react js</h1>
      <center>
      <table border={5}>
        <tbody>
            <tr>
                <th>Name : </th>
                <th>{props.name}</th>
            </tr>
            <tr>
                <th>Branch : </th>
                <th>{props.branch}</th>
            </tr>
            <tr>
                <th>Year : </th>
                <th>{props.year}</th>
            </tr>
            <tr>
                <th>Image : </th>
                <th><img src = {props.image} alt="" /></th>
            </tr>
        </tbody>
      </table>
      </center>
      </div>
    </div>
  )
}