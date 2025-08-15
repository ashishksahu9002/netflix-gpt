import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import toCamelCase from "../utils/toCamelCase";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const genreList = useSelector((store) => store.movies?.genreList);

  if (!genreList) return;

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          {genreList?.map((genre) => (
            <MovieList title={genre.name} movies={movies?.[genre?.movieGenre]} />
          ))}
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
