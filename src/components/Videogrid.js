import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import axios from "axios";
import Loading from "./Loading";
import 'animate.css';
let key = "AIzaSyCrB9e21ojlqFjuS4kbhEiAPEcORwcia-4";

function Videogrid(props) {
  let background_url = process.env.PUBLIC_URL + "/images/background.jpg";
  let url = `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=${props.max}&part=snippet%2C+id&playlistId=${props.playlist_id}&key=${key}`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(url);
      setTimeout(() => setLoading(false), 500);
      setData(results.data.items);
    };
    fetchData();
  }, [url]);

  var myStyle = {
    backgroundImage: `url(${background_url})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    padding: "10px",
    margin: "0px",
    border: " 10x solid black",
  };

  if (data.length < 5 && window.innerWidth > 900) {
    myStyle = {
      backgroundImage: `url(${background_url})`,
      backgroundSize: "cover",
      backgroundRepeat: "repeat-y",
      height: "100vh",
    };
  }

  return (
    <div>
      <div className="row" style={myStyle}>
        {loading ? <Loading /> : data && data.map((element) => {
      if (data === []) return null;
      else if (
        element.snippet.title === "Deleted video" ||
        element.snippet.title === "Private video"
      )
        return null;
      else {
        if (element.snippet.thumbnails.high.url)
          return (
            <div className="col-md-3 animate__animated animate__flash animate__faster" key={element.etag}>
              <Videos
                videoId={element.snippet.resourceId.videoId}
                videoTitle={element.snippet.title}
                thumbnail={element.snippet.thumbnails.high.url}
                updated={element.snippet.publishedAt}
              />
            </div>
          );
        return 0;
      }
    })}
      </div>
    </div>
  );
}

export default Videogrid;
