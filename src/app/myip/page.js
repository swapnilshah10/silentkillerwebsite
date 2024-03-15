// "use client"
async function Videogrid() {
  const background_url = "/background.jpg";
  const url = `https://swapnil123.pythonanywhere.com/your_ip/`;

  let data = {};
  try{
    data =   await fetch(url).then((response) => response.json());
  }
  catch(e){
    console.log(e);
  }
    
  const loading = false;
  if (!data || data["status"] !== "success") {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h1>No Ip Found , Backend down</h1>
      </div>
    );
  }

  var myStyle = {
    backgroundImage: `url(${background_url})`,
    height: "600px ",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    padding: "10px",
    margin: "0px",
    border: " 10x solid black",
    width : "60%",
    color : "white",
    borderRadius : "20px",
    justifyContent : "center",
    alignItems : "center",  
    display : "flex",
  };

  let outer = {
    backgroundImage: `url(${"/backgroundd.gif"})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    backgroundAttachment: "fixed",
    height: "1000 px ",
    padding: "20px",
  };

  let outerClass = "d-flex justify-content-center align-items-center ";

  return (
    <div className={outerClass} style={outer} key="outerDivKey">

        <div className=" justify-content-center align-items-center p-3" style={myStyle} key="innerDivKey">

                <h1> IP  : {data.ip} <br></br> Latitude : {data.lat} <br></br>Longitude  : {data.lat} <br></br>ISP  : {data.isp}<br></br> Region  : {data.regionName} <br></br> City : {data.city}</h1>    
            </div>
    </div>
  );
  
}

export default Videogrid;
