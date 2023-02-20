import React from 'react';
import { XAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import styles from "./averageSessions.module.css";
import { UserAverageSessionsPropTypes } from "./propTypes";
import CustomToolTip from "./CustomToolTip/CustomToolTip";
import "../../../services/User/Modeling/types";

/**
 * Show a graph with average sessions time for a user
 * 
 * @param {Object} props 
 * @param {Array<UserAverageSession>} props.averageSessions
 */

const AverageSessions = ({ averageSessions }) => {
  return (
    <div className={styles["average-sessions"]}>
      <p className={styles.title}>Durée moyenne des sessions</p>
      <ResponsiveContainer>
        <LineChart data={averageSessions}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "white", opacity: 0.5 }}
            tickMargin={20}
            height={50}
          />
          <Line
            dataKey="sessionLength"
            type="basis"
            dot={false}
            stroke="white"
            opacity={0.5}
            strokeWidth={3}
            unit="min"
          />
          <Tooltip content={<CustomToolTip />} cursor={{ fill: "green" }} offset={0} wrapperStyle={{ outline: "none" }} />
        </LineChart>
      </ResponsiveContainer>
    </div >
  );
};

AverageSessions.propTypes = UserAverageSessionsPropTypes;

export default AverageSessions;