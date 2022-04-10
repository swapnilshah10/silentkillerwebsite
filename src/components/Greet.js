import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Navbar from "./Navbar";

function Greet(props) {
  return (
    <>
    <Navbar/>
    <Header/>
      <h1>{props.name} is op</h1>
    <Footer/>
    </>
  );
}
export default Greet;