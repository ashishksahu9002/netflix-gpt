import { useState, useRef } from "react";
import MovieCard from "./Cards/MovieCard";
import HoverMovieCard from "./Cards/HoverMovieCard";

const MovieList = ({ title, movies }) => {
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const hoverTimer = useRef(null);

  const handleMouseEnter = (id) => {
    hoverTimer.current = setTimeout(() => {
      setHoveredMovieId(id);
    }, 500); // delay in ms
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current);
    setHoveredMovieId(null);
  };

  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-visible relative">
        <div className="flex">
          {movies?.map((movie) => (
            <div
            className="relative inline-block"
              key={movie.id}
              onMouseEnter={() => handleMouseEnter(movie.id)}
              onMouseLeave={handleMouseLeave}
            >
              <MovieCard
                posterPath={movie.poster_path}
                flag={hoveredMovieId === movie.id}
              />
              {hoveredMovieId === movie.id && (
                <HoverMovieCard
                  posterPath={movie.poster_path}
                  flag={hoveredMovieId === movie.id}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
