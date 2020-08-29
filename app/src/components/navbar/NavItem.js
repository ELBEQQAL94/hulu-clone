import React from 'react';

// requests
import {request} from '../../services';

// Types
import PropTypes from 'prop-types';

const NavItem = ({ selecetdOption, setSelecetdOption }) => (
  <ul>
    <li
      onClick={() => setSelecetdOption(request.fetchTrending)}
      className={`${selecetdOption === request.fetchTrending ? 'nav--active' : ''}`}
    >
      trending
    </li>
    <li
      onClick={() => setSelecetdOption(request.fetchTopRated)}
      className={`${selecetdOption === request.fetchTopRated ? 'nav--active' : ''}`}
    >
      top rated
    </li>
    <li
      onClick={() => setSelecetdOption(request.fetchActionMovies)}
      className={`${selecetdOption === request.fetchActionMovies ? 'nav--active' : ''}`}
    >
      action
    </li>
    <li
      onClick={() => setSelecetdOption(request.fetchComedyMovies)}
      className={`${selecetdOption === request.fetchComedyMovies ? 'nav--active' : ''}`}
    >
      comedy
    </li>
    <li
      onClick={() => setSelecetdOption(request.fetchHorrorMovies)}
      className={`${selecetdOption === request.fetchHorrorMovies ? 'nav--active' : ''}`}
    >
      horror
    </li>
    <li
      onClick={() => setSelecetdOption(request.fetchRomanceMovies)}
      className={`${selecetdOption === request.fetchRomanceMovies ? 'nav--active' : ''}`}
    >
      romance
    </li>
    <li
      onClick={() => setSelecetdOption(request.fetchMystery)}
      className={`${selecetdOption === request.fetchMystery ? 'nav--active' : ''}`}
    >
      mystery
    </li>
    <li
      onClick={() => setSelecetdOption(request.fetchSciFi)}
      className={`${selecetdOption === request.fetchSciFi ? 'nav--active' : ''}`}
    >
      sci-fi
    </li>
    <li
      onClick={() => setSelecetdOption(request.fetchWestern)}
      className={`${selecetdOption === request.fetchWestern ? 'nav--active' : ''}`}
    >
      western
    </li>
    <li
      onClick={() => setSelecetdOption(request.fetchAnimation)}
      className={`${selecetdOption === request.fetchAnimation ? 'nav--active' : ''}`}
    >
      animation
    </li>
  </ul>
);

NavItem.propTypes = {
  setSelecetdOption: PropTypes.string.isRequired,
  selecetdOption: PropTypes.string.isRequired,
};

export default NavItem;
