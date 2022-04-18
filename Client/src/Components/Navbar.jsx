import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';  // it is used to make open link without page load //
const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#/">User</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Login">Login</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Registration">Registration</NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link" to="/About">About</NavLink>
      </li>
      <li className="nav-item active">
      <NavLink className="nav-link" to="/Logout">Logout</NavLink>
      </li>
      <li className="nav-item active">
      <NavLink className="nav-link" to="/Appp">Add</NavLink>
      </li>
      
      
    </ul>
   
  </div>
</nav>
    </>
  )
}

export default Navbar