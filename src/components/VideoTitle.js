import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 md:px-24 text-white bg-gradient-to-r from-black/60">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="py-6 text-base md:text-lg">{overview}</p>
      </div>
      <div>
        <button className="bg-white text-black px-6 py-2 text-lg mx-1 rounded-lg hover:bg-gray-200 ">
          <i className="fa fa-play"></i> Play
        </button>
        <button className="text-white bg-gray-500 px-6 py-2 text-lg mx-1 rounded-lg hover:bg-opacity-80 ">
          <i className="fa fa-info-circle"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
