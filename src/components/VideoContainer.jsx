import React, { useEffect } from "react";
import { VideoCard } from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMostPopularVideos } from "../utils/slice";
import { mostPopularVideosData } from "../mockData/mostPopular";
import { Link, useLocation } from "react-router-dom";

export const VideoContainer = () => {
  const dispatch = useDispatch();
  const appState = useSelector((store) => store.app);
  const { mostPopularVideos } = appState;
  const location = useLocation();
  const isWatchPage = location.pathname == "/watch";

  const getMostPopularVideos = async () => {
    // const data = await fetch(YOUTUBE_API);
    // const json = await data.json();
    // console.log("response", json)
    // if(json.error && json.error.code) {
    dispatch(addMostPopularVideos(mostPopularVideosData.items));
    // }
  };

  useEffect(() => {
    getMostPopularVideos();
  }, []);

  if (!mostPopularVideos || !mostPopularVideos.length)
    return "Loading data... ";

  return (
    <div className={!isWatchPage ? "grid grid-cols-4 gap-4 py-4":"py-4"}>
      {mostPopularVideos?.map((item) => {
        return (
          <Link to={`/watch?v=${item.id}`}>
            <VideoCard
              key={item.id}
              title={item.snippet.title}
              description={item.snippet.description}
              channelTitle={item.snippet.channelTitle}
              viewCount={item.statistics.viewCount}
              publishedTime={item.snippet.publishedAt}
              thumbnail={item.snippet.thumbnails?.standard.url}
            />
          </Link>
        );
      })}
    </div>
  );
};
