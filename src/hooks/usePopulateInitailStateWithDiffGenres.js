import { useDispatch, useSelector } from "react-redux";
import { addMovieGenreToState } from "../utils/movieSlice";
import toCamelCase from "../utils/toCamelCase";

const usePopulateInitailStateWithDiffGenres = () => {
  const dispatch = useDispatch();
  const genreList = useSelector((store) => store.movies?.genreList);

  if (!genreList) return;

  genreList?.map((genre) => {
    const movieGenre = toCamelCase(genre.name) + "Movies";
    dispatch(addMovieGenreToState(movieGenre));
  });
};

export default usePopulateInitailStateWithDiffGenres;
