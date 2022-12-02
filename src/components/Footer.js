import React from "react";

function Footer() {
  let background_url = process.env.PUBLIC_URL + "/images/background.jpg";
  let style = {
    backgroundImage: `url(${background_url})`,
  };
  var width = window.innerWidth;
var height = window.innerHeight;
console.log(width, height);
if (width < 540){
    style = {
        backgroundImage: `url(${background_url})`,
        height: "100vh",
        width: "100vw",
    };
}
  return (
    <>
      <footer
        className="text-center text-lg-start bg-light text-muted"
        style={style}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5"style = {{fontSize: 20}}>
            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" >
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" style = {{fontSize: 20}}></i>❖S𝒊𝒍𝒆𝒏𝒕々𝒌𝒊𝒍𝒍𝒆𝒓࿐
                </h6>
                <p style={{}}>
                  Here you can see the content that is uploaded by your favrite
                  youtuber.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" >
                <h6 className="text-uppercase fw-bold mb-4">Connect with me</h6>
                
                    <li>
                    <a
                      className=" "
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/ig_silentkiller_op/"
                      style={{ textDecoration: "none", color: "#6c757d"  }}
                    >
                      Instagram
                    </a>
                    </li>
                    <li>
                    <a  
                      className=""
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/@silentkillerop"
                      style={{ textDecoration: "none", color: "#6c757d" }}
                    >
                      YouTube
                    </a>
                    </li>
                    <li>
                    <a
                      className=""
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/silentkillerop2"
                      style={{ textDecoration: "none", color: "#6c757d" }}
                    >
                      Twitter
                    </a>
                    </li>
                  
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  <a
                    href="mailto:silentkillerop123@protonmail.com"
                    style={{ textDecoration: "none", color: "#6c757d" }}
                  >
                    silentkillerop123@protonmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: (0, 0, 0, 0.05) }}
        >
          © 2022 Copyright: {"\t"}
          <a className="text-reset fw-bold" href="https://silentkillerop.live/">
            SilentkillerOP.live
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
