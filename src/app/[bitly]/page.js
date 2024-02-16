"use client"
import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './page.module.css';

// let background_url = http://localhost:3000/ + "/background.jpg";
var myStyle = {
  backgroundImage: `url(${"/backgroundd.gif"})`,
  height: "100%",
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "repeat-y",
  padding: "10px",
  margin: "0px",
  border: " 10px solid black",
  color: "white",

};

function Bitly({ params }) {
  // console.log(background_url);
  // const router = useRouter()
  let url = params.bitly;
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
    };
    if (ishort) {
      data.short_url = shortUrl;
    }

    axios
      .post(`https://swapnil123.pythonanywhere.com/api/payal/`, data)
      .then((response) => {
        console.log(response);
        setData("https:silentkillerop.tech/" + response.data.url);
      });
  };
  return (
    <div style={myStyle}>
      <div>{error && <div>{url.toUpperCase()} DOESNT EXIST</div>}</div>
      <div style={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <div className="container d-flex flex-column justify-content-center align-item-center h-75">
          <div className="row justify-content-center border-white">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-dark text-white border-white">Shorten URL</div>
                <div className="card-body bg-dark text-white">
                  <div>
                    <input
                      placeholder="Enter URL to shorten"
                      type="text"
                      name="long_url"
                      className="form-control bg-dark text-white border-white"
                      onChange={(e) => {
                        setLongUrl(e.target.value);
                      }}
                      style={styles.input}
                      required
                    />
                  </div>
                  {ishort && (
                    <div className="my-2">
                      <input
                        type="text"
                        name="short_url"
                        placeholder="Enter short word"
                        className="form-control bg-dark text-white border-white"
                        style={styles.input}
                        onChange={(e) => {
                          setShortUrl(e.target.value);
                        }}
                        required
                      />
                    </div>
                  )}
                  <div className="form-check bg-dark text-white">
                    <input
                      className="form-check-input bg-dark text-white border-white"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      onClick={() => {
                        setIshort(!ishort);
                      }}
                    />
                    <label
                      className="form-check-label bg-dark text-white"
                      // for="flexCheckDefault"
                      style={{ color: "black" }}
                    >
                      Create custom URL
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark my-2 border-white"
                    onClick={handleSubmit}
                  >
                    Shorten
                  </button>
                </div>
              </div>

              {data && (
                <div className="card my-4" style={{ backgroundColor: "#90eea8" }}>
                  <div className="card-body d-flex">
                    <a href={data.substring(25)} target="_blank" style={{ color: "black" }} >
                      {data}
                    </a>
                    <CopyToClipboard text={data}>
                      <button className=" mx-4 btn btn-outline-dark btn-sm position-relative top-0 start-0" onClick={{}}>Copy </button>
                    </CopyToClipboard>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Bitly;
