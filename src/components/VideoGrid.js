// "use client"
import React from "react";
import Videos from "./Videos";
import BackToTopButton from "./BacktoTop";
import BackgroundWrapper from "./BackGround";

export const revalidate = 3600


const Videogrid = async(props) =>{
  const background_url = "/background.jpg";
  const url = `https://api.silentkillerop.me/api/${props.playlist}`;  
  const response = await fetch(url, { cache: "no-store" }); // Use props.url to fetch data
  const data = await response.json();
  const loading = false;
  if (data == null) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <h1>No Videos Found</h1>
      </div>
    );
  }

  const titles = { all: "Latest", shorts: "Shorts", tdm: "TDM", drills: "Drills", chess: "Chess" };
  const portrait = props.playlist === "shorts" || props.playlist === "chess";

  const items = (data && data.snippet ? data.snippet : []).filter(
    (el) =>
      el.title !== "Deleted video" &&
      el.title !== "Private video" &&
      el.thumbnails &&
      el.thumbnails.high &&
      el.thumbnails.high.url
  );

  return (
    <BackgroundWrapper>
      <BackToTopButton />
      <section className="vgrid-section">
        {props.playlist !== "all" && (
          <header className="vgrid-header">
            <h1>{titles[props.playlist] || "Videos"}</h1>
            <span className="vgrid-rule" aria-hidden="true" />
          </header>
        )}
        <div className={`vgrid ${portrait ? "vgrid--portrait" : ""}`}>
          {items.map((element, index) => (
            <div className="vgrid-item" key={`video-${element.etag}-${index}`}>
              <Videos
                videoId={element.resourceId.videoId}
                videoTitle={element.title}
                thumbnail={element.thumbnails.high.url}
                updated={element.publishedAt}
                portrait={portrait}
              />
            </div>
          ))}
        </div>
      </section>
    </BackgroundWrapper>
  );
};

export default Videogrid;
