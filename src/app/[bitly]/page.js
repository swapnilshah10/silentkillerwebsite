"use client"
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './page.module.css';
import Dialog from "../../components/Dialog"
import getBackgroundData from "../../components/getBackgroundData"

// let background_url = http://localhost:3000/ + "/background.jpg";

function Bitly({ params }) {
  // console.log(background_url);
  // const router = useRouter()
  let url = params.bitly;

  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [shortUrl, setShortUrl] = React.useState(url === "shorten" ? "" : url);
  const [name, setName] = React.useState("");
  const [longUrl, setLongUrl] = React.useState(null);
  const [ishortPage, setIshortpage] = React.useState(url === "shorten");
  const [ishort, setIshort] = React.useState(false);
  const [existingUrlData, setExistingUrlData] = React.useState(null);

  const fetchData = async () => {
    if (ishortPage) return; // If `ishortPage` is true, exit the function without making a call.
  
    try {
      const response = await axios.get(`https://swapnil123.pythonanywhere.com/api/${url}/`);
      window.location = response.data.url;
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  const [background_url , setBackground]= useState("/background.jpg");

  let background = {
    is_enabled : false
  };

  const fetchBackground = async () => {
    background =  await getBackgroundData(background);
    if(background.is_enabled){
      setBackground( "/backgroundd.gif");
    }
    else{
       setBackground("/background.jpg"); 
    }
  }

  const handleClose = () => setExistingUrlData(null);
  

  useEffect(() => {
    fetchData();
    fetchBackground();
  }, []);



  async function checkIfUrlExists(shortUrl) {
    try {
      const response = await fetch(`https://swapnil123.pythonanywhere.com/api/${shortUrl}/`);
      if (response.ok) {
        const data = await response.json();
        return { exists: true, data } ;
      } else if (response.status === 404) {
        return { exists: false } ;
      }
    } catch (error) {
      console.error("Error fetching URL data:", error);
    }
  }

  const saveData = async () =>{
    let req = { long_url: longUrl };
    if (ishort) req.short_url = shortUrl;
    if (name!="") req.created_by = name;
    axios
      .post(`https://swapnil123.pythonanywhere.com/api/payal/`, req)
      .then((response) => {
        setData("https:silentkillerop.tech/" + response.data.url);
        setExistingUrlData(null)
      }).catch((error) => {
        // Handle the error here
        console.error("Error occurred:", error);
        setExistingUrlData(null)
      });
  }
  

  const handleSubmit = async () => {
    if(ishort){
     let check = await checkIfUrlExists(shortUrl);
     if(check.exists){
      console.log(check)
      setExistingUrlData(check.data);
      return;
     }
    }
    await saveData();    
  };


  return (
    <div className={styles.backgroundImage} style={{ backgroundImage: `url('./${background_url}')` }}>
    {existingUrlData && (
          <Dialog existingUrlData={existingUrlData} handleClose={handleClose} saveData = {saveData}/>
          )}
      {/* <div>{error && <div>{url.toUpperCase()} DOESNT EXIST</div>}</div> */}
      <div className={styles.centerContainer}>
        <div className={`container ${styles.cardContainer}`}>
              <div className="card">
                <div className="card-header bg-dark text-white border-white">Shorten URL</div>
                <div className="card-body bg-dark text-white">
                  <div>
                    <input
                      placeholder="Enter URL to shorten "
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
                        value={shortUrl}
                        placeholder="Enter your short word"
                        className="form-control bg-dark text-white border-white my-2"
                        style={styles.input}
                        onChange={(e) => {
                          setShortUrl(e.target.value);
                        }}
                        required
                      />
                      <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Enter your name"
                        className="form-control bg-dark text-white border-white my-2"
                        style={styles.input}
                        onChange={(e) => {
                          setName(e.target.value);
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
                      defaultChecked={ishort}
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
  );
}

export default Bitly;
