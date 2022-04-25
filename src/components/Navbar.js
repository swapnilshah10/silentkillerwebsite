import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark h-25">
        <div className="container-fluid">
          <a className="navbar-brand"href="/">
          <img src="https://yt3.ggpht.com/rlo2cSFY4XVGI7GHQGqyOMCvUHycSWNfOl-OIygStPd6ScApOjBWQMPm_VfDCqK_eRlIPcO6u-g=s176-c-k-c0x00ffffff-no-rj" alt="" width="40" height="40" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">SilentkillerOP</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/channel/UCzcKPLI9b0z-cUjCw6GFifA" >YouTube</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Other Social Medias
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="https://www.instagram.com/silentkillerop123/">Instagram</a></li>
                  <li><a className="dropdown-item" href="/">Loco</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>

  );
}

export default Navbar;
