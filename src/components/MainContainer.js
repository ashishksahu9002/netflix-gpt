import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  // console.log("mainMovie : ", mainMovie);

  // const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full aspect-video" >
      {/* <VideoTitle title={original_title} overview={overview} /> */}
      <VideoBackground mainMovie={mainMovie} />
    </div>
  );
};

export default MainContainer;
