import React from 'react';
import styles from "./sideNav.module.css";
import { Link } from "react-router-dom";
import { SideNavPropTypes } from "./propTypes";

/**
 * @typedef Links
 * @type {Object}
 * @property {string} route 
 * @property {React.ElementType} Logo
 */

/**
 * Create a Nav component which display naviation links
 * 
 * @param {Object} props
 * @param {string} props.copyrights
 * @param {Links[]} props.links 
 */

const SideNav = ({ copyrights, links }) => {
  return (
    <nav className={styles["side-bar"]}>
      <ul>
        {links.map(({ route, Logo }, index) => (
          <li key={index}>
            <Link to={route} className={styles.link}>
              <Logo />
            </Link>
          </li>
        )
        )}
      </ul>
      <p className={styles.copyrights}>{copyrights}</p>
    </nav>
  );
};

SideNav.propType = SideNavPropTypes;

export default SideNav;