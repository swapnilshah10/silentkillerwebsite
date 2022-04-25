import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Videogrid from "./Videogrid";

function Greet(props) {
  return (
    <>
    <Navbar/>
    <Header/>
      <h1>{props.name} is op</h1>
    <Sidebar/>
    <Videogrid/>
    <Footer/>
    </>
  );
}
export default Greet;