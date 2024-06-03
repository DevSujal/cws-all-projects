import React, {useState} from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);
    let me = {
        textAlign : "center",
        marginTop : "25%"
    }
  return (
    <div style={me}>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  )
}

export default Counter
