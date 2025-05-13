import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideMenu } from "../utils/slice";
import { useSearchParams } from "react-router-dom";
import { mostPopularVideosData } from "../mockData/mostPopular";
import { VideoContainer } from "./VideoContainer";

export const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(undefined);

  const selectedVideoId = searchParams.get("v");

  const getVideoDetails = () => {
    const videoInfo = mostPopularVideosData.items.find(
      (item) => item.id == selectedVideoId
    );
    setVideoDetails(videoInfo);
  };

  useEffect(() => {
    dispatch(closeSideMenu());
    getVideoDetails();
  }, [searchParams]);

  return (
    <div className="watch-page-container flex">
      <div className="video-container">
        <iframe
          className="rounded-2xl"
          width="760"
          height="460"
          src={`https://www.youtube.com/embed/${selectedVideoId}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="my-2 font-bold text-xl">
          {videoDetails?.snippet.title}
        </div>
        <div className="channel-icon flex">
        <img
            alt="User icon"
            className="cursor-pointer h-10 w-10"
            src="data:image/png;base64,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"
          />
          <div className="mx-2 my-auto">{videoDetails?.snippet.channelTitle}</div>
        </div>
        <div className="my-2 text-l w-180">{videoDetails?.snippet.description}</div>
      </div>
      <div className="watch-page-side-container px-5">
        <VideoContainer />
      </div>
    </div>
  );
};
