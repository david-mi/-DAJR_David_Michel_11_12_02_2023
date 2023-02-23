import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import styles from "./score.module.css";
import { ScorePropTypes } from "./propTypes";
import CustomLabel from "./CustomLabel/CustomLabel";

/**
 * Show a percentage graph with day score from a user
 * 
 * @param {Object} props 
 * @param {number} props.score
 */

const Score = ({ score }) => {
  return (
    <div className={styles.score}>
      <p className={styles.title}>Score</p>
      <CustomLabel score={score} />
      <ResponsiveContainer>
        <RadialBarChart
          width={200}
          height={200}
          data={[{ score }]}
          innerRadius="90"
          outerRadius="90"
          startAngle={90}
          endAngle={450}
          barSize={10}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey="score"
            tick={false}
          />
          <RadialBar
            dataKey="score"
            fill="#FF0000"
            cornerRadius={5}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div >
  );
};

Score.propTypes = ScorePropTypes;

export default Score;