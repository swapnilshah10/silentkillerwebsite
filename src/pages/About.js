import React from "react";

function About() {
  let background_url = process.env.PUBLIC_URL + "/images/background.jpg";
  var myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/backgroundd.gif"})`,
    backgroundSize: "cover",
    color: "white",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    padding: "2rem",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    flexDirection: "column",
    
  };

  var myStyle2 = {
    maxWidth: "700px"
  }
  return (
    <div style={myStyle}>
      <h1  style = {{padding: '10px'}}>About Me</h1>
      <div style={myStyle2}>
      <p >
        Hi there! My name is Swapnil Shah, and I'm a passionate gamer and
        content creator.
      </p>
      <p>
        I love playing and streaming games like BGMI, and I'm always on the
        lookout for new challenges and opportunities to improve my skills.
      </p>
      <br />
      <p>
        When I'm not gaming, I enjoy learning new programming languages and
        working on personal projects that showcase my creativity and technical
        abilities.
      </p>
      <p>
        I'm particularly interested in web development and enjoy building
        modern, responsive websites using frameworks like React.js.
      </p>
      <br />
      <p>
        Thanks for stopping by my channel, and I hope you enjoy watching my
        videos and streams as much as I enjoy creating them. Don't forget to
        like, comment, and subscribe to stay updated on my latest content!
      </p>
      </div>
    </div>
  );
}

export default About;
