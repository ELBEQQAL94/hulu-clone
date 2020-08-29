import React from 'react';

// Components
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

// styles
import "./Header.scss";

// Material UI Components
import AddBoxIcon from '@material-ui/icons/AddBox';

const Header = () => {
  return (
    <header className="header">
      <LeftContainer />
      <RightContainer />
    </header>
  );
};

export default Header;
