import Image from "next/image";

function Videos(props) {
  const title = props.videoTitle.split("#")[0].trim() || props.videoTitle;
  const date = new Date(props.updated).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <a
      className={`vcard ${props.portrait ? "vcard--portrait" : ""}`}
      href={`https://www.youtube.com/watch?v=${props.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${title} on YouTube`}
    >
      <div className="vcard__media">
        <Image
          src={props.thumbnail}
          alt=""
          fill
          sizes="(max-width: 576px) 50vw, (max-width: 992px) 33vw, 280px"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
        <span className="vcard__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" /></svg>
        </span>
        <div className="vcard__caption">
          <h3 className="vcard__title">{title}</h3>
          <time className="vcard__date" dateTime={props.updated}>{date}</time>
        </div>
      </div>
    </a>
  );
}

export default Videos;
