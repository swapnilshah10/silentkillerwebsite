// components/BackgroundWrapper.js

import React from 'react';
import getBackgroundData from "./getBackgroundData";
import Particles from "./Particles";
let background_url = "/background.jpg";

const BackgroundWrapper = async ({ children, additionalClass = "" }) => {
  let background = {
    is_enabled : false
  };

  background = await getBackgroundData(background);
  if(background.is_enabled){
    background_url = "/backgroundd.gif";
  }
  else{
    background_url = "/background.jpg"; 
  }
  // Define the outer style object
  const outerStyle = {
    backgroundImage: `url(${background_url})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    backgroundAttachment: "fixed",
    zIndex:-1
  };

  // Define the base and dynamic classes
  const outerClass = `d-flex justify-content-center align-items-center ${additionalClass}`;

  if (!background.is_enabled){
    return <div style = {{
      display: "flex",             // Enable flexbox layout
      justifyContent: "center",    // Horizontally center the children
      alignItems: "center",        // Vertically center the children
      // position: "relative",        // Ensure the container has a position context
      // height: "100vh",             // Full viewport height (adjust as needed)
      width: "100%",               // Full width
    }}>
    <Particles/>
      {children} 
    </div>
  }

  return (
    <div className={outerClass} style={outerStyle} key="outerDivKey">
      {children}
    </div>
  );
};

export default BackgroundWrapper;
