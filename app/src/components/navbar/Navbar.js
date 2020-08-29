import React from 'react';

// Types
import PropTypes from 'prop-types';

// Components
import NavItem from './NavItem';

// Styles
import "./Navbar.scss";

const Navbar = ({selecetdOption, setSelecetdOption}) => {
  return (
    <nav className="nav">
      <NavItem
        selecetdOption={selecetdOption}
        setSelecetdOption={setSelecetdOption}
      />
    </nav>
  );
};

Navbar.propTypes = {
  setSelecetdOption: PropTypes.string.isRequired,
  selecetdOption: PropTypes.string.isRequired,
};

export default Navbar;
