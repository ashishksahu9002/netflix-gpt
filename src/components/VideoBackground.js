import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import VideoTitle from "./VideoTitle";

const VideoBackground = ({ mainMovie }) => {
  const { original_title, overview, id } = mainMovie;
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(id);

  return (
    <>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <VideoTitle title={original_title} overview={overview} />
    </>
  );
};

export default VideoBackground;
