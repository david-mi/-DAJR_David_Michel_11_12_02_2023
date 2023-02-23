import React, { useEffect, useState } from 'react';
import styles from "./loader.module.css";

/**
 * Loader component to display while waiting services response
 */

const Loader = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    let timeoutId = null;

    /**
     * - If less than 3 dots are displayed, add another dot to {@link dots}
     * - If 3 dots are already displayed, remove them
     * - Getting called every 200ms
     */

    async function handleDots() {
      await new Promise((resolve) => {
        timeoutId = setTimeout(() => {
          setDots((previousDots) => {
            return dots.length < 3
              ? previousDots + "."
              : "";
          });
          resolve();
        }, 200);
      });
    }

    handleDots();

    return () => {
      clearTimeout(timeoutId);
    };

  }, [dots]);

  return (
    <div className={styles.loader}>
      <div className={styles["animation-container"]}>
        <div className={styles.animation}></div>
      </div>
      <p>
        Chargement des données
        <span className={styles.dots}>{dots}</span>
      </p>
    </div>
  );
};

export default Loader;