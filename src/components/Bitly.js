import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
let background_url = process.env.PUBLIC_URL + "/images/background.jpg";
var myStyle = {
  backgroundImage: `url(${background_url})`,
  height: "100%",
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "repeat-y",
  padding: "10px",
  margin: "0px",
  border: " 10x solid black",
  color: "white",
};

function Bitly() {
  const { url } = useParams();
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [shortUrl, setShortUrl] = React.useState(null);
  const [longUrl, setLongUrl] = React.useState(null);
  const [ishort, setIshort] = React.useState(false);

  const fetchData = async () => {
    axios
      .get(`https://swapnil123.pythonanywhere.com/api/${url}/`)
      .then((response) => {
         window.location = response.data.url;
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = () => {
    let data = {
      long_url: longUrl,
    }
    if (ishort) {
      data.short_url = shortUrl;
    }

    axios.post(`https://swapnil123.pythonanywhere.com/api/payal/`, data)
    .then((response) => {
      console.log(response);
      setData("https:silentkillerop.live/"+response.data.url);
    })
  }
  return (
    <div style={myStyle}>
      
      <div>{error && <div>{url.toUpperCase()} DOESNT EXIST</div>}</div>
      <div class="container d-flex flex-column justify-content-center ">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header bg-dark text-white">Shorten URL</div>
              <div class="card-body">
                <div>
                  <input
                    type="text"
                    name="long_url"
                    placeholder="Enter URL to shorten"
                    class="form-control"
                    onChange={(e) => {setLongUrl(e.target.value)}}
                    required
                  />
                </div>
                {
                  ishort && <div className="my-2">
                    <input
                    type="text"
                    name="short_url"
                    placeholder="Enter short word"
                    class="form-control"
                    onChange={(e) => {setShortUrl(e.target.value)}}
                    required
                  />
                  </div>

                }
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => {setIshort(!ishort) }}
                  />
                  <label class="form-check-label" for="flexCheckDefault" style={{color : "black"}}>
                    Create custom URL
                  </label>
                </div>
                <button type="submit" class="btn btn-dark my-2" onClick={handleSubmit}>
                  Shorten
                </button>
                
              </div>
            </div>
              <>{
                  data && <div className="my-2" style={{color : "white"}}>
                    <a href = {data}>
                    {data}
                    </a></div>
                }
                </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bitly;
