import React from 'react';
import styles from "./sideNav.module.css";
import { Link } from "react-router-dom";

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
 * @param {Links[]} props.links 
 * @returns 
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

export default SideNav;