import React from 'react';
import styles from "./heading.module.css";

const Heading = ({ identity }) => {
  return (
    <header className={styles.heading}>
      <h1 className={styles.greeting}>Bonjour <span>{identity.firstName}</span></h1>
      <p className={styles.congratualtions}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};

export default Heading;