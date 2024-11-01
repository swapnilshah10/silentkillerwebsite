import Image from 'next/image';

const Background = () => (
  <div style={{ position: "absolute", width: "100%", height: "100vh", overflow: "hidden" }}>
    <Image
      src="/background.gif"
      alt="Background animation"
      layout="fill"
      objectFit="cover"
      quality={100} // Adjust quality as desired for caching
      priority // Loads on the first load
    />
  </div>
);

export default Background;