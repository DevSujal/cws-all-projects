import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Counter = (props) => {
    const [number, setNumber] = useState(props.num);

    const increamentVal = () => {
        setNumber((prev) => prev + 1);
        setNumber((prev) => prev + 1);
    }
  return (
    <div className='text-center my-5'>
      <h1>Count : {number}</h1>
      <button type="button" className='btn btn-success' onClick={increamentVal}>Increament</button>
      {/* <AnimationEffect>Iam sujal</AnimationEffect> */}
    </div> 
  )
}

Counter.propTypes = {
    num : PropTypes.number.isRequired,
};
Counter.defaultProps = {
    num : 0
};

export default Counter
