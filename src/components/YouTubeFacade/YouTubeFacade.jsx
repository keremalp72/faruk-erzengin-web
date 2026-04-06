import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import './YouTubeFacade.css';

const YouTubeFacade = ({ videoId, title }) => {
  const [loaded, setLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (loaded) {
    return (
      <div className="yt-facade-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div
      className="yt-facade-wrapper yt-facade-thumbnail"
      onClick={() => setLoaded(true)}
      role="button"
      tabIndex={0}
      aria-label={`${title} videosunu oynat`}
      onKeyDown={(e) => { if (e.key === 'Enter') setLoaded(true); }}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        loading="lazy"
        width="480"
        height="360"
      />
      <div className="yt-facade-play-btn">
        <FaPlay />
      </div>
    </div>
  );
};

export default YouTubeFacade;
