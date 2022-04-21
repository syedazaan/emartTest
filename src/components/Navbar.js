import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
    return (
        <div>
            <nav  className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow.sm">
  <div  className="container">
    <NavLink  className="navbar-brand fw-bold fs-4" to=" ">LA COLLECTION</NavLink>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=" navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav mx-auto mb-2 mb-lg-0">
        {/* <li  className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to=" ">Home</NavLink>
        </li> */}
        <li  className="nav-item">
          <NavLink  className="nav-link" to="/">Home</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link" to="/products">Products</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link" to="/about">About</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link" to="/contact">Contact</NavLink>
        </li>
        {/* <li  className="nav-item dropdown">
          <NavLink  className="nav-link dropdown-toggle" to=" " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul  className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink  className="dropdown-item" to=" ">Action</NavLink></li>
            <li><NavLink  className="dropdown-item" to=" ">Another action</NavLink></li>
            <li><hr  className="dropdown-divider"/></li>
            <li><NavLink  className="dropdown-item" to=" ">Something else here</NavLink></li>
          </ul>
        </li> */}

        {/* <li  className="nav-item">
          <NavLink  className="nav-link disabled" to=' '>Disabled</NavLink>
        </li> */}
      </ul>
      {/* <form  className="d-flex">
        <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className='buttons'>
          <NavLink className='btn btn-outline-dark' to="/login">
              <i className='fa fa-sign-in me-1'></i>Login
          </NavLink>
          <NavLink className='btn btn-outline-dark ms-2' to="/register">
              <i className='fa fa-user-plus me-1'></i>Register
          </NavLink>
          <NavLink className='btn btn-outline-dark ms-2' to="/cart">
              <i className='fa fa-shopping-cart me-1'></i>Cart (state.length)
          </NavLink>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar