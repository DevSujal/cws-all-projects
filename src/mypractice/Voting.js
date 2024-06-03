import React, { useState } from 'react'

const Voting = (props) => {
    const[count, setCount] = useState();
    console.log(count);
    let style1 = {
        // border : "5px solid black",
        width : "200px",
        // margin : "20px 0",
        display : "table",
        name : 5,
        textAlign : "right"
    }
  return (
    <div>
        <center>
      <table style={style1} border={5}>
        <tbody >
        <tr>
            <td>
                {props.name.toUpperCase()}
            </td>
            <td>
               <button className="btn btn-danger" onClick={() => setCount(count+1)}>vote</button>
            </td>
        </tr>
        </tbody>
      </table>
      </center>
    </div>
  )
}

export default Voting
