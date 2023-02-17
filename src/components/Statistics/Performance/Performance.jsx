import React from 'react';
import { RadarChart, PolarGrid, ResponsiveContainer, PolarAngleAxis, Radar } from "recharts";
import styles from "./performance.module.css";
import { UserPerformancesPropTypes } from "./propTypes";
import "../../../services/User/Modeling/types";

/**
 * Show a graph with performances from a user
 * 
 * @param {Object} props 
 * @param {Array<UserPerformance>} props.performance
 */

const Performance = ({ performance }) => {
  return (
    <div className={styles.performance}>
      <ResponsiveContainer>
        <RadarChart data={performance}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "white", fontSize: "12px" }}
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div >
  );
};

Performance.propTypes = UserPerformancesPropTypes;

export default Performance;