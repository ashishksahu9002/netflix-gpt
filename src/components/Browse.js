import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovieGenre from "../hooks/useMovieGenre";
// import usePopulateInitailStateWithDiffGenres from "../hooks/usePopulateInitailStateWithDiffGenres";
import useToGetMovieAccordingToDiffGenre from "../hooks/useToGetMovieAccordingToDiffGenre";
import GptSearchPage from "./GPT/GptSearchPage";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  // useMovieGenre();
  // usePopulateInitailStateWithDiffGenres();
  // useToGetMovieAccordingToDiffGenre();

  useNowPlayingMovies();

  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  return (
    <div className="w-screen min-h-screen bg-black">
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
