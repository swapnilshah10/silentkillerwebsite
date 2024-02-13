import "./loading.css";
import React from "react";


function Loading() {
  let background_url = "/background.jpg";
  var myStyle = {
    backgroundImage: `url(${background_url})`,
    display: "flex",
    minHeight: "100vh", 
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",

  };
  return (
    <div style={myStyle}>
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className=" wheel-and-hamster"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
    </div>
  );
}

export default Loading;
