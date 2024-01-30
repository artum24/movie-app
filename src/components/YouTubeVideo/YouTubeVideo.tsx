import React from "react";

type YouTubeVideoProps = {
  videoId: string;
};

const YouTubeVideo = ({ videoId }: YouTubeVideoProps) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;
