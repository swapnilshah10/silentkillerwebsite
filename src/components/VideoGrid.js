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
  const intros = {
    all: "Welcome to SilentKillerOP. This is the full library of BGMI videos from the channel: team deathmatch highlights, short clips and practice drills, newest first. Every card opens the video on YouTube. Looking for something specific? Use the Shorts, TDM and Drills pages for a focused list, or visit the Games page to play the browser games I have built.",
    shorts: "Quick BGMI clips and funny moments from the SilentKillerOP channel, in vertical format. Tap a short to watch it on YouTube. For longer gameplay, head to the TDM page, or browse everything on the home page.",
    tdm: "Team Deathmatch is the fastest way to sharpen aim and reflexes in BGMI, and these videos are the best of my TDM matches: close fights, high kill games and the occasional disaster. Watch for positioning ideas, spray control and how to peek corners safely.",
    drills: "Practice drills for BGMI: short, repeatable exercises to improve recoil control, target switching and movement. Pick a drill, try it in the training ground, and compare your results with mine.",
    chess: "Chess shorts from the channel: tricks, traps and funny blunders from real online games, from the 900s to the 1100s. A quick way to pick up opening ideas and see the mistakes everyone makes. You can also play my Dice Chess variant on the Games page.",
  };
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
        {intros[props.playlist] && <p className="vgrid-intro">{intros[props.playlist]}</p>}
      </section>
    </BackgroundWrapper>
  );
};

export default Videogrid;
