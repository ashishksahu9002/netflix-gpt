import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video h-screen pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <div className="w-[32.5rem]">
        <h1 className="text-6xl font-bold"> {title} </h1>
      <p className="py-6 text-lg text-justify">{overview}</p>
      </div>
      <div className="">
        <button className="bg-white text-black px-6 py-2 text-xl mx-1 my-4 rounded-lg hover:bg-gray-200 " ><i className="fa fa-play"></i> Play</button>
        <button className="text-white bg-gray-500 px-6 py-2 text-xl mx-1 my-4 rounded-lg hover:bg-opacity-80 "><i className="fa fa-info-circle"></i> More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
