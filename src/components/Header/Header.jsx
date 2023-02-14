import React from 'react';
import styles from "./header.module.css";
import Nav from "./Nav/Nav";
import { HeaderPropTypes } from "./propTypes";

/**
 * Create a Header component which takes a React ElementType as props
 * 
 * @param {Object} props
 * @param {React.ElementType} props.Logo
 */

const Header = ({ Logo }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
};

Header.propTypes = HeaderPropTypes;

export default Header;