import React from 'react'
import ReactPlayer from "react-player"

function Videos(props) {
  console.log("HEhe")
  console.log(props.videoId)
  return (
    <div className = "">
      <div className="d-flex flex-row mx-4 pb-3 ">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${props.videoId}`}
          
          />
      </div>
    </div>
    
  )
}

export default Videos