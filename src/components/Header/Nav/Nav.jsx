import React from 'react';
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

/**
 * Create a Nav component which display naviation links
 */

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="#">Accueil</Link>
        </li>
        <li>
          <Link to="/profile">Profil</Link>
        </li>
        <li>
          <Link to="#">Réglage</Link>
        </li>
        <li>
          <Link to="#">Communauté</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;