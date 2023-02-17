import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend, ResponsiveContainer } from "recharts";
import styles from "./activity.module.css";
import { userActivitiesPropTypes } from "./propTypes";
import CustomToolTip from "./CustomToolTip/CustomToolTip";

/**
 * Create a Nutrients component to show all nutrients infos for a user
 * 
 * @param {Object} props 
 * @param {Array<UserActivity>} props.activity
 */

const Activity = ({ activity }) => {
  return (
    <div className={styles.activity}>
      <ResponsiveContainer width="99%" height="auto" aspect={3}>
        <BarChart data={activity} barGap={8} barCategoryGap={54}  >
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis dataKey="index" tickMargin={16} tickLine={false} />
          <YAxis
            yAxisId="calories"
            hide={true}
            width={80}
            domain={["dataMin - 100", "dataMax + 100"]}
            dataKey="calories"
            type="number"
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            axisLine={false}
            tickMargin={43}
            width={80}
            domain={["dataMin - 2", "dataMax + 2"]}
            tickLine={false}
            tickCount={4}
            dataKey="kilogram"
            type="number"
          />
          <Tooltip content={<CustomToolTip />} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            height={64}
            formatter={(value, { dataKey }) => {
              const className = `${styles.legend} ${styles[dataKey]}`;
              return <span className={className}>{value}</span>;
            }}
          />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
            name="Poids (kg)"
            unit="kg"
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
            name="Calories brûlées (kCal)"
            minPointSize={5}
            unit="kCal"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

Activity.propTypes = userActivitiesPropTypes;

export default Activity;