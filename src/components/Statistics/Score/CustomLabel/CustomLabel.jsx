import React from 'react';
import styles from "./customLabel.module.css";
import { CustomLabelProptypes } from "./propTypes";

/**
 * @param {Object} props 
 * @param {number} props.score
 */

const CustomLabel = ({ score }) => {
  return (
    <div className={styles.label}>
      <p>{score}%</p>
      <p>de votre objectif</p>
    </div>
  );
};

CustomLabel.propTypes = CustomLabelProptypes;

export default CustomLabel;