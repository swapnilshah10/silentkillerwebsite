"use client";
import React, { useState, useEffect } from "react";
import getBackgroundData from "../../components/getBackgroundData";

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

function Videogrid() {

  const [background_url , setBackground]= useState("/background.jpg");

  let background = {
    is_enabled : false
  };

  const fetchBackground = async () => {
    background =  await getBackgroundData(background);
    if(background.is_enabled){
      setBackground( "/backgroundd.gif");
    }
    else{
       setBackground("/background.jpg"); 
    }
  }
  const url = `https://api.silentkillerop.me/your_ip/`;

  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const res = await fetchData(url);
      // Show IPv4 only: ask an IPv4-only endpoint, else keep backend IP if it is v4.
      let ipv4 = (res && res.ip && !String(res.ip).includes(":")) ? res.ip : null;
      if (!ipv4) {
        try {
          const r = await fetch("https://api4.ipify.org?format=json");
          ipv4 = (await r.json()).ip;
        } catch (e) {}
      }
      setData({ ...res, ip: ipv4 || "IPv4 not available" });
      fetchBackground();
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
    background: "rgba(10, 10, 16, 0.78)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(201, 169, 110, 0.3)",
    width: "min(92%, 560px)",
    color: "white",
    borderRadius: "18px",
    boxShadow: "0 24px 60px rgba(0,0,0,.55)",
    padding: "2rem 2.2rem",
  };

  const rows = [
    ["IP", data.ip],
    ["Latitude", data.lat],
    ["Longitude", data.lon],
    ["ISP", data.isp],
    ["Region", data.regionName],
    ["City", data.city],
  ];

  const outer = {
    backgroundImage: `url(${background_url})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    backgroundAttachment: "fixed",
    minHeight: "85vh"
  };

  const outerClass = "d-flex justify-content-center align-items-center";

  return (
    <div className={outerClass} style={outer} key="outerDivKey">
      <div style={myStyle} key="innerDivKey">
        <h2 style={{ color: "#e6d3a8", marginBottom: "1.2rem" }}>Your connection</h2>
        {rows.map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", padding: "0.65rem 0", borderTop: "1px solid rgba(201,169,110,0.15)" }}>
            <span style={{ color: "#8d8a82", letterSpacing: ".08em", textTransform: "uppercase", fontSize: ".8rem" }}>{k}</span>
            <span style={{ textAlign: "right" }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videogrid;
