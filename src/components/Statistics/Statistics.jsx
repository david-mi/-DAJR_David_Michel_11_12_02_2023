import React from "react";
import { Heading, Nutrients, Activity, AverageSessions, Performance } from "./index";
import styles from "./statistics.module.css";
import { StatisticsPropTypes } from "./propTypes";

/**
 * Show every user statistics
 * 
 * @param {Object} props 
 * @param {UserAllData} props.userData
 */

const Statistics = ({ userData }) => {
  const { informations, averageSessions, performance } = userData;

  return (
    <section className={styles.statistics}>
      <Heading identity={informations.identity} />
      <Nutrients nutrients={informations.nutrients} />
      <Activity activity={userData.activity} />
      <AverageSessions averageSessions={averageSessions} />
      <Performance performance={performance} />
    </section>
  );
};

Statistics.propTypes = StatisticsPropTypes;

export default Statistics;