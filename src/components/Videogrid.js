import React , { useEffect, useState} from "react";
import Videos from "./Videos";
import axios from "axios";

let key = "AIzaSyCrB9e21ojlqFjuS4kbhEiAPEcORwcia-4";
let playlist_id = "PLc6bUwTVKwCMfjMH3feuA0eGYabjU6A75";
let url = `https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=${playlist_id}&key=${key}`;

// url = `https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=PLc6bUwTVKwCMfjMH3feuA0eGYabjU6A75&key=AIzaSyCrB9e21ojlqFjuS4kbhEiAPEcORwcia-4`;


function Videogrid(props) {
  const [videos, setVideos] = useState([]);
    const getCustomersData = () => {
      axios
      .get(url)
      .then(response => {
        const posts = response.data;
        console.log(posts);
        setVideos({posts});
      })
      .catch(error => console.log(error));
      };
      getCustomersData();
      // console.log(videos);
      
  return (
    <div>
      Videogrid
      {/* <div className="row">
                        {vvideos.items.map((element) => {
                            if(!vvideos) return null;
                            else{
                            return <div className="col-md-4" key={element.etag}>
                                <Videos id={element.id ? element.id : ""} />
                            </div>}
                        })}
      </div> */}
    </div>
  );
}

export default Videogrid;
