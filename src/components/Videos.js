import Image from 'next/image';
function Videos(props) {
  let background_url = "/background.jpg";
  const myStyle = {
    backgroundImage: `url(${background_url})`,
    // width : "20rem",
  };

  const myArray = props.videoTitle.split("#");
  let date = new Date(props.updated).toGMTString();
  date = date.slice(17, 22) + ", " + date.slice(4, 17);

  return (
    <div style={myStyle}>
      <div className="card-group my-2" style={myStyle}>
        <div className="card" style={myStyle}>
          <a
            href={`https://www.youtube.com/watch?v=${props.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
             <Image
              src={props.thumbnail}
              alt="Video thumbnail"
              // layout="responsive"
              // className="rounded"
              width={160} // Set appropriate width and height to maintain aspect ratio
              height={200}
              className="card-img-top responsive"
              priority={false} // Set to true for images that need to load immediately
            />
          </a>
          <div className="card-body">
            <h5 className="card-title text-white">{myArray[0]}</h5>
            <p className="card-text"></p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Uploaded at {date}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
