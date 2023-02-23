import React from 'react';
import styles from "./nutrient.module.css";
import { NutrientPropTypes } from "./propTypes";

/**
 * @typedef {Object} UserNutrient
 * @property {string} name
 * @property {"kCal" | "g"} unit
 * @property {number} count
 * @property {React.ElementType} Icon
 */

/**
 * Create a Nutrients component to show a nutrient infos for a user
 * 
 * @param {Object} props 
 * @param {UserNutrient} props.nutrient
 */

const Nutrient = ({ nutrient }) => {
  const { name, unit, count, Icon } = nutrient;

  return (
    <article className={styles.nutrient}>
      <p className={styles.count}>{count + unit}</p>
      <p className={styles.name}>{name}</p>
      <Icon className={styles.icon} />
    </article>
  );
};

Nutrient.propTypes = NutrientPropTypes;

export default Nutrient;