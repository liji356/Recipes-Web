import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">FOOD RECIPES</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link className="nav-link" to={"/"}>Detalis</Link>
          <Link className="nav-link" to={"/search"}>Search</Link>
          <Link className="nav-link" to={"/view"}>View</Link>
       
    
      </div>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar