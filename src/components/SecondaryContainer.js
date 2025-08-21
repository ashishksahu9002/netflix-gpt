import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import toCamelCase from "../utils/toCamelCase";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // const genreList = useSelector((store) => store.movies?.genreList);

  // if (!genreList) return;

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black relative z-20">
        <div className="pl-4 md:pl-12">
          {/* {genreList?.map((genre) => (
            <MovieList key={genre?.movieGenre} title={genre.name} movies={movies?.[genre?.movieGenre]} />
          ))} */}
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
