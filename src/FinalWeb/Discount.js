import React, { useState } from 'react'

const Discount = () => {
    const initialPrice = 3000;
    const[price, setPrice] = useState(initialPrice);

    function reset2 (){
        setPrice(initialPrice - 0.2 * initialPrice)
        console.log("jai shree RAM")
    }
  return (
    <div className='my-3'>
     <center>
     <h1>Oiriginal Price : {price} </h1>
      <button className='btn btn-primary mx-3 my-3' onClick={() => setPrice(initialPrice)}>reset</button>
      <button className='btn btn-primary mx-3 my-3' onClick={() => reset2()}>20% Discount</button>
      <button className='btn btn-primary mx-3 my-3' onClick={() => setPrice(initialPrice - 0.3 * initialPrice)}>30% Discount</button>
     </center>
    </div>
  )
}

export default Discount
