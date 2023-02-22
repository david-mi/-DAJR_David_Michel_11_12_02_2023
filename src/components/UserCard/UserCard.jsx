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
  const apiEnvironment = process.env.REACT_APP_API_HOST !== undefined
    ? "API"
    : "MOCK";

  return (
    <Link to={`profile/${userId}`} className={styles.link}>
      <span className={styles.user}>Utilisateur {userId}</span>
      <span>({apiEnvironment})</span>
      <div className={styles.logo}>
        <Logo />
      </div>
    </Link>
  );
};

UserCard.propTypes = UserCardPropTypes;

export default UserCard;