import React from 'react';
import styles from "./error.module.css";
import { SportSeeLogo } from "../../components/svg";
import { ErrorPagePropTypes } from "./propTypes";

/**
 * @param {string} message error message to display
 */

const ErrorPage = ({ message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>Erreur</h1>
        <p className={styles.message}>{message}</p>
      </div>
      <SportSeeLogo />
    </div>
  );
};

ErrorPage.propTypes = ErrorPagePropTypes;

export default ErrorPage;