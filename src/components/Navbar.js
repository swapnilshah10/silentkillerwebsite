import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react"
function Navbar() {
  const [search ,setSearch] = useState ('');
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark h-25">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">   
          <img src="https://yt3.ggpht.com/rlo2cSFY4XVGI7GHQGqyOMCvUHycSWNfOl-OIygStPd6ScApOjBWQMPm_VfDCqK_eRlIPcO6u-g=s176-c-k-c0x00ffffff-no-rj" 
           className="d-inline-block align-top" alt="" width="40" height="40" />  
               SilentkillerOP    
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/shorts">Shorts</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/tdm">Tdm</Link> 
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/drills">Drills</Link>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Social Medias
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/silentkillerop123/">Instagram</a></li>
                  <li >
                <a className="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCzcKPLI9b0z-cUjCw6GFifA" >YouTube</a>
              </li>
                  <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://twitter.com/silentkillerop2">Twitter</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Nothing else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" onChange={event => {
                setSearch(event.target.value); console.log(search);
              } }  aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>

  );
}

export default Navbar;
