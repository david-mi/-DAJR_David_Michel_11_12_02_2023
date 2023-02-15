import React from 'react';
import styles from "./nutrients.module.css";
import Nutrient from "./Nutrient/Nutrient";

const Nutrients = ({ nutrients }) => {
  return (
    <div className={styles.nutrients}>
      {nutrients.map((nutrient) => {
        return <Nutrient key={nutrient.name} nutrient={nutrient} />;
      })}
    </div>
  );
};

export default Nutrients;