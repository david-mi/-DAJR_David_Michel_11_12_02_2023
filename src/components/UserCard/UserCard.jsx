import React from 'react';
import { Link } from "react-router-dom";
import styles from "./userCard.module.css";
import { UserCardPropTypes } from "./propTypes";

/**
 * Create a Link component who redirects on the user page matching the given {@link userId}
 * 
 * @param {Object} props
 * @param {string} props.userId
 */

const UserCard = ({ userId, Logo }) => {
  const dataEnvironment = process.env.REACT_APP_ENV_DATA;

  return (
    <Link to={`profile/${userId}`} className={styles.link}>
      <span className={styles.user}>Utilisateur {userId}</span>
      <span>({dataEnvironment})</span>
      <div className={styles.logo}>
        <Logo />
      </div>
    </Link>
  );
};

UserCard.propTypes = UserCardPropTypes;

export default UserCard;