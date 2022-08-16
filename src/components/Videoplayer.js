import React from "react";
import ReactPlayer from "react-player";

function Videoplayer(props) {
  return (
    <div>
      <div className="">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${props.videoId}`} />
      </div>
    </div>
  );
}

export default Videoplayer;
