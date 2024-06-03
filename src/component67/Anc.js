import React from 'react'

    function Garage(props){
        const cars = props.cars;
 
  return (
    <div>
        <h1>Garage</h1>
        {cars.length && <h2>you have {cars.length} cars in your Garage</h2>}
    </div>
  )
}
// const cars = ["farari", "bmw", "tata"]
// const root = ReactDOM.creatRoot(document.getElementById('root'))
// root.render(<Garage />)

