import React from "react";
// import Videoplayer from "./Videoplayer";
// import ReactPlayer from "react-player";

function Videos(props) {
  let background_url = process.env.PUBLIC_URL  + '/images/background.jpg'
  const myStyle={
    backgroundImage: 
    `url(${background_url})` }; 
const myArray = props.videoTitle.split("#");
  return (
    <div style={myStyle}>
      <div className="card-group my-2" style={myStyle}>
        <div className="card" style={myStyle}>
          <a href={`https://www.youtube.com/watch?v=${props.videoId}`}>
          <img src={props.thumbnail} className="card-img-top" alt="Top"/>
          </a>
          <div className="card-body">
            <h5 className="card-title text-white">{myArray[0]}</h5>
            <p className="card-text">
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Uploaded at {new Date(props.updated).toGMTString()}</small>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Videos;
