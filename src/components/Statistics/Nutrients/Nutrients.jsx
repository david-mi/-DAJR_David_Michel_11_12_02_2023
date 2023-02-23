import React from 'react';
import styles from "./nutrients.module.css";
import Nutrient from "./Nutrient/Nutrient";
import { NutrientsPropTypes } from "./propTypes";

/**
 * Create a Nutrients component to show all nutrients infos for a user
 * 
 * @param {Object} props 
 * @param {Array<object>} props.nutrients
 */

const Nutrients = ({ nutrients }) => {
  return (
    <div className={styles.nutrients}>
      {nutrients.map((nutrient) => {
        return <Nutrient key={nutrient.name} nutrient={nutrient} />;
      })}
    </div>
  );
};

Nutrients.propTypes = NutrientsPropTypes;

export default Nutrients;