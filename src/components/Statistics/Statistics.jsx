import React from "react";
import { Heading, Nutrients, Activity, AverageSessions, Performance, Score } from "./index";
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
      <div className={styles.squares}>
        <AverageSessions averageSessions={averageSessions} />
        <Performance performance={performance} />
        <Score score={informations.todayScore} />
      </div>
    </section>
  );
};

Statistics.propTypes = StatisticsPropTypes;

export default Statistics;