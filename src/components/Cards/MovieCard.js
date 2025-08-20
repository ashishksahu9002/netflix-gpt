import { IMG_CDN_URL } from "../../utils/constants";

const MovieCard = ({ posterPath, flag }) => {
  if (!posterPath) return null;
  return (
    <div
      className={`transition-opacity duration-300 ${
        flag ? "opacity-40" : "opacity-100"
      }`}
    >
      <div className="w-36 md:w-48 pr-4 text-white">
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      </div>
    </div>
  );
};
export default MovieCard;
