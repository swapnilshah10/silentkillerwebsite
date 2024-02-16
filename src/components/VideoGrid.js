// "use client"
import React from "react";
import Videos from "./Videos";
import "animate.css";


async function Videogrid(props) {
  const background_url = "/background.jpg";
  const url = `https://swapnil123.pythonanywhere.com/api/${props.playlist}`;
  const data = await fetch(url).then((response) => response.json());
  const loading = false;
  if (!data) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h1>No Videos Found</h1>
      </div>
    );
  }

  var myStyle = {
    backgroundImage: `url(${background_url})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    padding: "10px",
    margin: "0px",
    border: " 10x solid black",
    width : "60%"
  };

  let outer = {
    backgroundImage: `url(${"/backgroundd.gif"})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    backgroundAttachment: "fixed",
  };

  let outerClass = "d-flex justify-content-center align-items-center";

  return (
    <div className={outerClass} style={outer} key="outerDivKey">
      <div className="row" style={myStyle} key="innerDivKey">
        {loading ? (
          <Loading />
        ) : (
          data &&
          data.snippet.map((element, index) => {
            if (
              data.length === 0 ||
              element.title === "Deleted video" ||
              element.title === "Private video"
            ) {
              return <React.Fragment key={`fragment-${index}`} />;
            } else {
              if (element.thumbnails.high.url) {
                return (
                  <div
                    className="col-md-4 animate__animated animate__flash animate__faster p-1"
                    key={`video-${element.etag}-${index}`}
                  >
                    <Videos
                      videoId={element.resourceId.videoId}
                      videoTitle={element.title}
                      thumbnail={element.thumbnails.high.url}
                      updated={element.publishedAt}
                      key={`video-${element.etag}-${index}`}
                    />
                  </div>
                );
              }
              return null;
            }
          })
        )}
      </div>
    </div>
  );
  
}

export default Videogrid;
