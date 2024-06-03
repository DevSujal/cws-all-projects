import React from 'react'
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div className='container flex '>
      <nav>
        <Link to = "/About">About</Link>
        <Link to = "/TextForms">TextForms</Link>
        <Link to = "/about">pata</Link>
        <Link to = "/about">nahi</Link>
      </nav>
    </div>
  )
}
export default Header
