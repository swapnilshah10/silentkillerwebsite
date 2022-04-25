import React from 'react'
import ReactPlayer from "react-player"

function Videos(props) {
  return (
    <div class = "">
      <div className="d-flex flex-row mx-4 pb-3 ">
        <ReactPlayer
          url={`https://www.youtube.com/embed/${props.id}`}
          />
      </div>
    </div>
    
  )
}

export default Videos