export const metadata = { title: "About", description: "About Swapnil Shah: gamer, content creator and web developer behind SilentKillerOP.", alternates: { canonical: "/about" } };

function About() {
  let background_url = "/background.jpg";
  var myStyle = {
    backgroundImage: `url(${background_url})`,
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
    <div style={myStyle} className="playwrite-gb-s-example">
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
      <br />
      <h2 style={{ fontSize: "1.8rem", marginTop: "1rem" }}>What you will find here</h2>
      <p>
        The home, Shorts, TDM and Drills pages collect my BGMI videos in one
        place: team deathmatch highlights, short clips, and practice drills for
        aim and movement. The Chess page gathers my chess shorts.
      </p>
      <p>
        The <a href="/games">Games</a> page has three browser games I built
        myself, Atom Reaction, Dice Chess and Ultimate Tic Tac Toe, and the{" "}
        <a href="/projects">Projects</a> page lists the other things I have
        made, from web apps to a trading toolkit.
      </p>
      <p>
        There is also a small URL shortener at <a href="/shorten">/shorten</a>.
        It is free to use, but links that point to harmful content are removed,
        see the <a href="/terms">Terms</a>.
      </p>
      <br />
      <p>
        Questions, feedback or ideas? Head to the <a href="/contact">contact page</a>.
      </p>
      </div>
    </div>
  );
}

export default About;
