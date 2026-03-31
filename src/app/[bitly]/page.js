"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './page.module.css';
import Dialog from "../../components/Dialog"
import getBackgroundData from "../../components/getBackgroundData"
import Particles from "../../components/Particles"
import  { FRONT_END_BASE_URL }  from "../../components/Constants.js";
import { QRCodeCanvas } from "qrcode.react";

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
      const response = await axios.get(`https://api.silentkillerop.me/api/${url}/`);
      window.location = response.data.url;
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  const [background_url , setBackground]= useState("/background.jpg");
  const [is_enabled , setEnable] = useState(false)

  
  const fetchBackground = async () => {
    let background = {}
    background = await getBackgroundData(background)
    setEnable(background.is_enabled);
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
      const response = await fetch(`https://api.silentkillerop.me/api/${shortUrl}/`);
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
      .post(`https://api.silentkillerop.me/api/payal/`, req)
      .then((response) => {
        setData(FRONT_END_BASE_URL + response.data.url);
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

  const Particless = () => {
    return is_enabled ? <></> : <Particles />;
    // return <></>
  };
  

  return (
    <div className={styles.backgroundImage} style={{ backgroundImage: `url('./${background_url}')` }}>
      <Particless/>
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
                    <div className="card my-2" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                      <div className="card-body item=center text-center my-1" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                      <a href={data.substring(25)} target="_blank" style={{ color: "black" }} >
                        {data}
                      </a>
                      
                     
                      <CopyToClipboard text={data}>
                        <button className=" mx-4 btn btn-outline-dark btn-sm" onClick={{}}>Copy </button>
                      </CopyToClipboard>

                    </div>

               
                      <div className="card-body item=center text-center my-1" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                        <div className="my-1" id="qr-gen">
                        <QRCodeCanvas value={data} size={240} includeMargin={true} />
                      </div>
                      <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() => {
                        const qrDiv = document.getElementById('qr-gen');
                        const canvas = qrDiv.querySelector('canvas');
                        if (canvas) {
                          const url = canvas.toDataURL("image/png");
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = "short-url-qr.png";
                          a.click();
                        }
                      }}
                    >
                      Download QR
                    </button>
                    </div>


                </div>
              )}
            </div>
            

          </div>
    </div>
  );
}

export default Bitly;
