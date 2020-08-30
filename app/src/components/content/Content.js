import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';

// Service
import { instance, baseImgUrl } from '../../services';

// Types
import PropTypes from 'prop-types';

// Components
import VideoCard from './VideoCard';

// Material UI Spinner
import CircularProgress from '@material-ui/core/CircularProgress';

// styles
import "./Content.scss";

const Content = ({selecetdOption}) => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await instance.get(selecetdOption);
        setMovies(response.data.results);
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchMovies();

  }, [selecetdOption]);

  const renderMovies = () => (
    <div className="content">
      {
        error && <p>Connection failed!</p>
      }
      {
        loading ? <CircularProgress />
        :
        movies?.map((movie) => (
          <FlipMove>
            <VideoCard
              key={movie.id}
              movie={movie}
              baseImgUrl={baseImgUrl}
            />
          </FlipMove>
        ))
      }
    </div>
  );

  return ( renderMovies() );
};

Content.propTypes = {
  selecetdOption: PropTypes.string.isRequired,
};

export default Content;
