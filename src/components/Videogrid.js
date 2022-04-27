import React , { useEffect, useState} from "react";
import Videos from "./Videos";
import axios from "axios";

let key = "AIzaSyCrB9e21ojlqFjuS4kbhEiAPEcORwcia-4";
let playlist_id = "PLc6bUwTVKwCPOYLwfpKp5uBxaK9dSl5Qx";
// let url = `https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=${playlist_id}&key=${key}`;

// let url=' https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLc6bUwTVKwCMfjMH3feuA0eGYabjU6A75&key=AIzaSyCrB9e21ojlqFjuS4kbhEiAPEcORwcia-4'

let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=${playlist_id}&key=${key}`
// url = `https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=PLc6bUwTVKwCMfjMH3feuA0eGYabjU6A75&key=AIzaSyCrB9e21ojlqFjuS4kbhEiAPEcORwcia-4`;


function Videogrid(props) {
    const [data, setData] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const results = await axios(url);
        setData(results.data.items) 
      }
      fetchData();
    },[]);
      console.log(data);
  
  return (
    <div>
      <div className="row">
                        {data && data.map((element) => {
                            if(!data) return null;
                            else{
                            return <div className="col-md-4" key={element.etag}>
                                <Videos videoId= {element.snippet.resourceId.videoId} />
                            </div>}
                        })}
      </div>
    </div>
  );
}

export default Videogrid;
