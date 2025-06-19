import React from "react";

const VideoSection = () => {
  return (
    <div className=" bg-[#DC1B79] w-full h-fit px-5 sm:px-20 py-20 flex items-center justify-center">
      <video
        className="h-[30em] w-full md:w-[40em] lg:w-[50em] bg-[#000] object-cover"
        autoPlay
        loop
        muted
        controls
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
