import React from 'react'

const About = () => {
    let mystyle = {
        textDecoration : "underlined",
        fontWeight : "bold",
        fontSize : "50px"
    }
  return (
    <div className='text-center my-5' style={mystyle}>
      I am About
    </div>
  )
}

export default About
