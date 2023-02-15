import React from 'react';
import styles from "./nutrient.module.css";

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

export default Nutrient;