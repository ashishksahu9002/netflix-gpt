import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";
import {
  BsChevronDown,
  BsCircle,
  BsHandThumbsUp,
  BsPlusCircle,
} from "react-icons/bs";

const HoverMovieCard = ({ posterPath, flag }) => {
  console.log("HoverMovieCard");
  return (
    <div
      className={`absolute top-0 left-0 w-[300px] pr-4 text-white flex justify-between bg-black z-10 transform origin-center transition-all ease-in-out duration-500 ${
        flag ? "opacity-100 scale-105 z-10" : "opacity-0 scale-75 z-0"
      }`}
    >
      <div className="w-64">
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      </div>
      <div className="flex flex-col justify-between items-center text-5xl my-5 px-2 ">
        <div className="">
          <BsPlusCircle className="my-2" />
          <div className="relative flex justify-center items-center mt-8">
            <BsCircle className="absolute" />
            <BsHandThumbsUp className="center text-2xl" />
          </div>
        </div>
        <div className="relative flex justify-center items-center mb-8">
          <BsCircle className="absolute" />
          <BsChevronDown className="center text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default HoverMovieCard;

/*
import { BsPlusCircle } from "react-icons/bs";
BsCheckCircle 
import { BsHandThumbsUp } from "react-icons/bs";
BsHandThumbsUpFill
import { BsHandThumbsDown } from "react-icons/bs";
BsHandThumbsDownFill
import { BsHeart } from "react-icons/bs";
<BsHeartFill />
BsCircle 
BsChevronDown 
BsTriangleFill 
<BsHandThumbsDown />
<BsHeart />

*/
