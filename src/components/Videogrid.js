import React , { useEffect, useState} from "react";
import Videos from "./Videos";
import axios from "axios";

let key = "AIzaSyCrB9e21ojlqFjuS4kbhEiAPEcORwcia-4";

function Videogrid(props) {
  let background_url = process.env.PUBLIC_URL  + '/images/background.jpg'
  let url = `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=${props.max}&part=snippet%2C+id&playlistId=${props.playlist_id}&key=${key}`
  const [data, setData] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const results = await axios(url);
        setData(results.data.items) 
      }
      fetchData();
    },[]);
      
      var myStyle={
        backgroundImage: 
 `url(${background_url})`,
 height:'100%'   ,
 backgroundSize: "cover",
  backgroundRepeat: "repeat-y"
};
  
if(data.length < 5 && window.innerWidth > 900){
  myStyle = {backgroundImage: `url(${background_url})`,
  backgroundSize: "cover",
  backgroundRepeat: "repeat-y",height: '100vh'}
}

  return (
    <div>
      <div className="row" style={myStyle}>
                        {data && data.map((element) => {
                            if(!data) return null;
                            else if (element.snippet.title === "Deleted video") return null;
                            else{
                            return <div className="col-md-3" key={element.etag}>
                                <Videos videoId= {element.snippet.resourceId.videoId} videoTitle={element.snippet.title} thumbnail={element.snippet.thumbnails.high.url} updated={element.snippet.publishedAt}/>
                            </div>}
                        })}
      </div>
      
    </div>
  );
}

export default Videogrid;
