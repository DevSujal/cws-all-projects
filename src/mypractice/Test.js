import React from 'react'
import Voting from './Voting'

const Test = () => {
   let handlevent = () => {
        console.log(Voting.count);
    }
  return (
    <div className='container'>
        <h1>This is the Election Website.</h1>
      {/* <Voting name = "Name "/> */}
      <Voting name = "Sujal "/>
      <Voting name = "prajakta "/>
      <Voting name = "bhupesh"/>
      <Voting name = "Ankush"/>
      <center><button className='btn btn-primary' onClick={handlevent}>submit</button></center>
    </div>
  )
}

export default Test
