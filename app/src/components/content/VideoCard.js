import React, { useState } from 'react';

// Types
import PropTypes from 'prop-types';

// Styles
import "./VideoCard.scss";

const VideoCard = ({ movie, baseImgUrl }) => {

  const [loadImag, setLoadImag] = useState(false);
  const {id, backdrop_path, poster_path} = movie;
  const title = movie?.title || movie?.name || movie?.original_name;


  return (
    <div className="video__card">
      <h2>{title}</h2>
      <img
        style={loadImag ? {} : {display: 'none'}}
        src={`${baseImgUrl}${backdrop_path || poster_path}`}
        alt={title}
        title={title}
        onLoad={() => setLoadImag(true)}
      />
    </div>
  );
};

VideoCard.propTypes = {
  movie: PropTypes.object.isRequired,
  baseImgUrl: PropTypes.string.isRequired,
};

export default VideoCard;
