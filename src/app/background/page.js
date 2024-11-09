const Background = () => (
  <div style={{ position: "absolute", width: "100%", height: "100vh", overflow: "hidden" }}>
    <video
      autoPlay
      loop
      muted
      playsInline // Ensures it plays on mobile devices
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        minWidth: "100%",
        minHeight: "100%",

        height: "100vh",
        transform: "translate(-50%, -50%)",
        zIndex: -1,
      }}
    >
      <source src="./backgroundd.gif" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default Background;
