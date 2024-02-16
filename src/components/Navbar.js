"use client"
import React from "react";
import Link from 'next/link'
// import 'bootstrap';
// import { useState } from "react"

import  { useEffect} from "react";
import axios from "axios";
const fetchData = () => {
  axios
    .get(`https://swapnil123.pythonanywhere.com/save_ip/`)
};
function Navbar() {
    useEffect(() => {
      fetchData();
    }, []);
  // const [inputText, setInputText] = useState("");
  // let inputHandler = (e) => {
  //   var lowerCase = "search?q="+e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  // };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark h-25">
        <div className="container-fluid">
          <Link className="navbar-brand " href="/">
            <img src={'/profile.png'}
              className="d-inline-block align-top" alt="" width="40" height="40" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">SilentkillerOP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/shorts">Shorts</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/tdm">Tdm</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/drills">Drills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/chess">Chess</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/about">About me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/projects">Projects</Link>
              </li>


{/* Social Media Dropdown */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="/" id="socialMediaDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Social Medias
  </a>
  <ul className="dropdown-menu bg-dark text-white" aria-labelledby="socialMediaDropdown">
    <li>
      <a className="dropdown-item bg-dark text-white" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ig_silentkiller_op/">Instagram</a>
    </li>
    <li>
      <a className="dropdown-item bg-dark text-white" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@silentkillerop">YouTube</a>
    </li>
    <li>
      <a className="dropdown-item bg-dark text-white" target="_blank" rel="noopener noreferrer" href="https://twitter.com/swapnilshah102">Twitter</a>
    </li>
    <li>
      <hr className="dropdown-divider" />
    </li>
    <li>
      <a className="dropdown-item bg-dark text-white" href="/">Nothing else here</a>
    </li>
  </ul>
</li>

{/* Coding Dropdown */}
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="/" id="codingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Coding
  </a>
  <ul className="dropdown-menu bg-dark text-white" aria-labelledby="codingDropdown">
    <li>
      <a className="dropdown-item bg-dark text-white" target="_blank" rel="noopener noreferrer" href="/resume">Resume</a>
    </li>
    <li>
      <a className="dropdown-item bg-dark text-white" target="_blank" rel="noopener noreferrer" href="/leetcode">LeetCode</a>
    </li>
    <li>
      <a className="dropdown-item bg-dark text-white" target="_blank" rel="noopener noreferrer" href="/codechef">Codechef</a>
    </li>
    <li>
      <a className="dropdown-item bg-dark text-white" target="_blank" rel="noopener noreferrer" href="/codingninjas">CodingNinjas</a>
    </li>
    <li>
      <hr className="dropdown-divider" />
    </li>
    <li>
      <a className="dropdown-item bg-dark text-white" href="/">Nothing else here</a>
    </li>
  </ul>
</li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
