"use client";
import React, { useState, useEffect } from "react";

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

function Videogrid() {
  const background_url = "/background.jpg";
  const url = `https://swapnil123.pythonanywhere.com/your_ip/`;

  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await fetchData(url);
      setData(res);
      console.log(res);
    }
    getData();
  }, []);
    
  const loading = false;
  if (!data || data["status"] !== "success") {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h1>No Ip Found , Backend down</h1>
      </div>
    );
  }

  const myStyle = {
    backgroundImage: `url(${background_url})`,
    height: "600px",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    padding: "10px",
    margin: "0px",
    border: "10px solid black",
    width: "60%",
    color: "white",
    borderRadius: "20px",
    justifyContent: "center",
    alignItems: "center",  
    display: "flex",
  };

  const outer = {
    backgroundImage: `url(${"/backgroundd.gif"})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    backgroundAttachment: "fixed",
    height: "1000px",
    padding: "20px",
  };

  const outerClass = "d-flex justify-content-center align-items-center";

  return (
    <div className={outerClass} style={outer} key="outerDivKey">
      <div className="justify-content-center align-items-center p-3" style={myStyle} key="innerDivKey">
        <h1> IP: {data.ip} <br /> Latitude: {data.lat} <br /> Longitude: {data.lat} <br /> ISP: {data.isp} <br /> Region: {data.regionName} <br /> City: {data.city}</h1>    
      </div>
    </div>
  );
}

export default Videogrid;
