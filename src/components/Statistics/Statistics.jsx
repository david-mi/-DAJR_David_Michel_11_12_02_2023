import React from "react";
import { Heading, Nutrients } from "./index";
import styles from "./statistics.module.css";
import { StatisticsPropTypes } from "./propTypes";

/**
 * Show every user statistics
 * 
 * @param {Object} props 
 * @param {UserAllData} props.userData
 */

const Statistics = ({ userData }) => {
  const { informations } = userData;

  return (
    <section className={styles.statistics}>
      <Heading identity={informations.identity} />
      <Nutrients nutrients={informations.nutrients} />
    </section>
  );
};

Statistics.propTypes = StatisticsPropTypes;

export default Statistics;