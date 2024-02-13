import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import axios from "axios";
import Loading from "./Loading";
import "animate.css";
// let key = "YOUR_API_KEY_HERE"; // Replace with your actual API key
// let key = "AIzaSyCrB9e21ojlqFjuS4kbhEiAPEcORwcia-4";

function Videogrid(props) {
  let background_url = "/background.jpg";
  let url = `https://swapnil123.pythonanywhere.com/api/${props.url}`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const results = await axios(url);
        
        // Check if the component is still mounted before updating state
        if (isMounted) {
          setData(results.data);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
      }
    };

    const fetchDataWithTimeout = async () => {
      // Set a timeout for 500ms
      const timeout = setTimeout(() => {
        // If the component is still mounted, call the API again
        if (isMounted) {
          fetchData();
        }
      }, 500);

      // Call the API
      await fetchDataWithTimeout();

      // Clear the timeout to prevent the second API call if the response comes within 500ms
      clearTimeout(timeout);
    };

    // Initial API call
    fetchData();

    // Cleanup function to clear the timeout if the component is unmounted
    return () => {
      isMounted = false;
    };
  }, [url]);

  var myStyle = {
    // display: "inline-block" ,
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

  if (data.length < 5 && window.innerWidth > 900) {
    myStyle = {
      backgroundImage: `url(${background_url})`,
      backgroundSize: "cover",
      backgroundRepeat: "repeat-y",
      // height: "100vh",
      width: "60%",
    };
  }

  if (window.innerWidth < 900) {
    outerClass = "";
    outer = {};
    myStyle.width = "100%";
  };

  return (
    <div className={outerClass} style ={outer}> 
      <div className="row" style={myStyle}>
        {loading ? (
          <Loading />
        ) : (
          data &&
          data.snippet.map((element) => {
            if (data == []) return null;
            else if (
              element.title === "Deleted video" ||
              element.title === "Private video"
            )
              return null;
            else {
              if (element.thumbnails.high.url)
                return (
                  <div
                    className="col-md-4 animate__animated animate__flash animate__faster p-1"
                    key={element.etag}
                  >
                    <Videos
                      videoId={element.resourceId.videoId}
                      videoTitle={element.title}
                      thumbnail={element.thumbnails.high.url}
                      updated={element.publishedAt}
                    />
                  </div>
                );
              return 0;
            }
          })
        )}
      </div>
    </div>
  );
}

export default Videogrid;
