import React from 'react';
import styles from "./heading.module.css";
import { HeadingPropTypes } from "./propTypes";
import "../../../services/User/Modeling/types";

/**
 * Create a Heading component which takes a React ElementType as props
 * 
 * @param {Object} props 
 * @param {UserIdentity} props.identity
 */

const Heading = ({ identity }) => {
  return (
    <header className={styles.heading}>
      <h1 className={styles.greeting}>Bonjour <span>{identity.firstName}</span></h1>
      <p className={styles.congratualtions}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};

Heading.propTypes = HeadingPropTypes;

export default Heading;