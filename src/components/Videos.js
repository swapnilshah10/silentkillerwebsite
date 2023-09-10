import React from "react";

function Videos(props) {
  let background_url = process.env.PUBLIC_URL + "/images/background.jpg";
  const myStyle = {
    backgroundImage: `url(${background_url})`,
    // width : "20rem",
  };

  const myArray = props.videoTitle.split("#");
  let date = new Date(props.updated).toGMTString();
  date = date.slice(17, 22) + ", " + date.slice(4, 17);

  return (
    <div style={myStyle}>
      <div className="card-group my-2" style={myStyle}>
        <div className="card" style={myStyle}>
          <a
            href={`https://www.youtube.com/watch?v=${props.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={props.thumbnail} className="card-img-top" alt="Top" />
          </a>
          <div className="card-body">
            <h5 className="card-title text-white">{myArray[0]}</h5>
            <p className="card-text"></p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Uploaded at {date}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
