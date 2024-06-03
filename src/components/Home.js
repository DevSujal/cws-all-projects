import React from 'react'
import home from "../images/home.jpg";

const Home = () => {
    let heading = "shri Ramdeobaba College Of Engineering And Management"
  return (
    <div>
      <center>
      <center><h2 className='my-5'>{heading.toUpperCase()}</h2></center>
      <img src= "http://www.rknec.edu/img/admin.png" alt="home"/>
      </center>
    </div>
  )
}

export default Home
