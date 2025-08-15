import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovieGenre from "../hooks/useMovieGenre";
import usePopulateInitailStateWithDiffGenres from "../hooks/usePopulateInitailStateWithDiffGenres";
import useToGetMovieAccordingToDiffGenre from "../hooks/useToGetMovieAccordingToDiffGenre";

const Browse = () => {
  useMovieGenre()
  usePopulateInitailStateWithDiffGenres()
  useToGetMovieAccordingToDiffGenre()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
          Main Container
            - Video Background
            - Video Title
          Secondary Container
            - Movie List * n
              - Movie Card * n
      */}
    </div>
  );
};

export default Browse;
