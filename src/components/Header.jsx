import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='navb'>
        <div className='container'>
            <div className='row'>
            <nav className="navbar navbar-expand-lg nvb fw-3">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" href="#">
     <h1 className="logo  ">Logo</h1>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav m-auto">
              <li className="nav-item px-3">
                <NavLink
                   to="/"
                   className="nav-link"
                   activeClassName="text-orange-700"
                 >
                   Home
                 </NavLink>
               </li>
               <li className="nav-item px-3">
                 <NavLink
                   to="/aboutus"
                   className="nav-link"
                   activeClassName="text-orange-700"
                 >
                   About
                 </NavLink>
               </li>
               <li className="nav-item px-3">
                 <link to="Services" />
                 <NavLink
                   to="/Services"
                 
                   className="nav-link"
                   activeClassName="text-orange-700"
                 >
                   Services
                 </NavLink>
               </li>
               <li className="nav-item px-3">
                 <link to="Contact" />
                 <NavLink
                   to="/Contact"
                 
                   className="nav-link"
                   activeClassName="text-orange-700"
                 >
                   Contact Us
                 </NavLink>
               </li>
              
             </ul>


    
    </div>



  </div>
</nav>
            </div>
        </div>
    </header>
  )
}

export default Header
