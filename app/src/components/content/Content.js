import React, { useState, useEffect } from 'react';

// Service
import { instance, request, baseImgUrl } from '../../services';

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

  }, []);

  const renderMovies = () => (
    <div className="content">
      {
        error && <p>Connection failed!</p>
      }
      {
        loading ? <CircularProgress />
        :
        movies?.map((movie) => (
          <VideoCard
            key={movie.id}
            movie={movie}
            baseImgUrl={baseImgUrl}
          />
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
