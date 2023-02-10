import React from 'react';
import LogoText from './LogoText';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <LogoText text="My Weather" />
    </div>
  );
};

export default Header;
