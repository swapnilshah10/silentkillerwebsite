import React from "react";
// import ReactPlayer from "react-player";

function Videos(props) {

  
  const myStyle={
    backgroundImage: 
"url('https://www.pixelstalk.net/wp-content/uploads/2016/08/Download-HD-Best-Background-Photos.jpg')",
}; 
const myArray = props.videoTitle.split("#");
  return (
    <div style={myStyle}>
      {/* <div className="d-flex flex-row mx-4 pb-3 ">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${props.videoId}`} />
      </div> */}

      <div className="card-group my-2" style={myStyle}>
        <div className="card" style={myStyle}>
          <a href={`https://www.youtube.com/watch?v=${props.videoId}`}>
          <img src={props.thumbnail} className="card-img-top "  />
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
