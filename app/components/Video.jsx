import { useEffect, useRef } from "react";

const Video = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
          observer.unobserve(entry.target);
        }
        // else if (entry.is)
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ height: "98vh", width: "25vw" }}>
      <video
        ref={videoRef}
        loop
        style={{
          objectFit: "cover",
          height: "100%",
          borderRadius: "6px",
        }}
        // onClick={(e) => e.target.pause()}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
