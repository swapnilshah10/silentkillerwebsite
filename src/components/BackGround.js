// components/BackgroundWrapper.js

import React from 'react';
import getBackgroundData from "./getBackgroundData";
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
  };

  // Define the base and dynamic classes
  const outerClass = `d-flex justify-content-center align-items-center ${additionalClass}`;

  return (
    <div className={outerClass} style={outerStyle} key="outerDivKey">
      {children}
    </div>
  );
};

export default BackgroundWrapper;
