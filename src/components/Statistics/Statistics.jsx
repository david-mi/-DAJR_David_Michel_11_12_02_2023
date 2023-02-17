import React from "react";
import { Heading, Nutrients, Activity } from "./index";
import styles from "./statistics.module.css";
import { StatisticsPropTypes } from "./propTypes";
import AverageSessions from "./AverageSessions/AverageSessions";

/**
 * Show every user statistics
 * 
 * @param {Object} props 
 * @param {UserAllData} props.userData
 */

const Statistics = ({ userData }) => {
  const { informations, averageSessions } = userData;

  return (
    <section className={styles.statistics}>
      <Heading identity={informations.identity} />
      <Nutrients nutrients={informations.nutrients} />
      <Activity activity={userData.activity} />
      <AverageSessions averageSessions={averageSessions} />
    </section>
  );
};

Statistics.propTypes = StatisticsPropTypes;

export default Statistics;