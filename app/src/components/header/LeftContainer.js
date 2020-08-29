import React from 'react';

// Material UI Icons
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const LeftContainer = () => (
  <div className="left__container">
    <div className="header__icon header__icon--active">
      <HomeIcon />
      <p>home</p>
    </div>
    <div className="header__icon">
      <FlashOnIcon />
      <p>trending</p>
    </div>
    <div className="header__icon">
      <LiveTvIcon />
      <p>verified</p>
    </div>
    <div className="header__icon">
      <VideoLibraryIcon />
      <p>collections</p>
    </div>
    <div className="header__icon">
      <SearchIcon />
      <p>search</p>
    </div>
    <div className="header__icon">
      <PersonOutlineIcon />
      <p>account</p>
    </div>
  </div>
);

export default LeftContainer;
