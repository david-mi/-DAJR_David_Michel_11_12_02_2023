import React from 'react';
import styles from "./header.module.css";
import Nav from "./Nav/Nav";
import { HeaderPropTypes } from "./propTypes";

/**
 * @typedef Links
 * @type {Object}
 * @property {string} route 
 * @property {string} name
 */

/**
 * Create a Header component which takes a React ElementType as props
 * 
 * @param {Object} props
 * @param {React.ElementType} props.Logo
 * @param {Links[]} props.links
 */

const Header = ({ Logo, links }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav links={links} />
    </header>
  );
};

Header.propTypes = HeaderPropTypes;

export default Header;