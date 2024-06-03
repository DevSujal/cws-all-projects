import React, {useState} from 'react'

export default function UseState() {
    const[color, setColor] = useState("red");

    let style1 = {
        position : "absolute",
        textAlign : "center",
    }
  return (
    <div style={style1}>
      <form action="">
        <label htmlFor="">
            <button onClick={() => setColor("blue")}>setColor</button>
        </label>
        <h1>My Favourite color is : {color} </h1>
      </form>
    </div>
  )
}
