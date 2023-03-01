import React from 'react';
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Nav from "./Nav/Nav";
import { HeaderPropTypes } from "./propTypes";

/**
 * Create a Header component displaying a logo and navigation links
 * 
 * @param {Object} props
 * @param {React.ElementType} props.Logo
 * @param {Array<object>} props.links
 */

const Header = ({ Logo, links }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <Nav links={links} />
    </header>
  );
};

Header.propTypes = HeaderPropTypes;

export default Header;