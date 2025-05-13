import React from "react";

export const VideoCard = (props) => {
  const { title, channelTitle, viewCount, thumbnail} = props;
  return (
    <div className="pr-2 py-2 cursor-pointer shadow-lg">
      <img
        className="w-80 rounded-xl hover:rounded-none"
        src={thumbnail}
      />
      <div className="video-title font-bold text-l my-1 px-2">{title}!</div>
      <div className="px-2">{channelTitle}</div>
      <div className="px-2">{viewCount} views</div>
    </div>
  );
};
