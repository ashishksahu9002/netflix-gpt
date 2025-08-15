import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGenreList } from "../utils/movieSlice";
import toCamelCase from "../utils/toCamelCase";

const useMovieGenre = () => {
  // Fetch Data from TMBD api and update store
  const genreList = [
    {
      id: 3,
      name: "Now Playing",
    },
    {
      id: 3,
      name: "Upcoming",
    },
    {
      id: 3,
      name: "Popular",
    },
    {
      id: 3,
      name: "Top Rated",
    },
  ];

  const dispatch = useDispatch();

  const getNowPlayingMoview = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list",
      API_OPTIONS
    );
    const json = await data.json();
    json.genres = [...genreList, ...json.genres].map((genre) => ({
      ...genre,
      movieGenre: toCamelCase(genre.name) + "Movies",
      genreUrlKey: genre.name.toLowerCase().replaceAll(" ", "_"),
    }));
    dispatch(addGenreList(json.genres));
  };

  useEffect(() => {
    getNowPlayingMoview();
  }, []);
};

export default useMovieGenre;
