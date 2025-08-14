import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <div className="w-[32.5rem]">
        <h1 className="text-6xl font-bold"> {title} </h1>
      <p className="py-6 text-lg text-justify">{overview}</p>
      </div>
      <div className="">
        <button className="bg-white text-black px-6 py-2 text-xl mx-1 my-4 rounded-lg hover:bg-gray-200 " ><i className="fa fa-play"></i> Play</button>
        <button className="text-white bg-gray-600 bg-opacity-50 px-6 py-2 text-xl mx-1 my-4 rounded-lg hover:bg-black hover:bg-opacity-65 ">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
