import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import toCamelCase from "../utils/toCamelCase";
import { addMoviesToMovieGenre } from "../utils/movieSlice";

const useToGetMovieAccordingToDiffGenre = () => {
  const dispatch = useDispatch();
  const genreList = useSelector((store) => store.movies?.genreList);
  const movies = useSelector((store) => store.movies)

  const getMovieAccordingToDiffGenre = async (id, genreUrlKey, movieGenre) => {
    const url1 = `https://api.themoviedb.org/3/movie/${genreUrlKey}?language=en-US&page=1`;
    const url2 = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`;
    const url = id === 3 ? url1 : url2;

    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(
      addMoviesToMovieGenre({
        key: movieGenre,
        results: json.results,
      })
    );
  };

  useEffect(() => {
    if (!genreList) return;
    genreList?.map((genre) => {
      const { name, id } = genre;
      const movieGenre = toCamelCase(name) + "Movies";
      const genreUrlKey = name.toLowerCase().replaceAll(" ", "_");
      !movies[movieGenre] && getMovieAccordingToDiffGenre(id, genreUrlKey, movieGenre);
    });
  }, [genreList]);
};

export default useToGetMovieAccordingToDiffGenre;
