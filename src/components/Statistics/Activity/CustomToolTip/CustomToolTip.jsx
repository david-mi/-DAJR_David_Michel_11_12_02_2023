import styles from "./customToolTip.module.css";

const CustomToolTip = ({ active, payload }) => {
  if (active && payload?.length) {
    const { value: weight, unit: weightUnit } = payload[0];
    const { value: calories, unit: caloriesUnit } = payload[1];
    return (
      <div className={styles.tooltip}>
        <p className={styles.weight}>{weight + weightUnit}</p>
        <p className={styles.height}>{calories + caloriesUnit}</p>
      </div>
    );
  }

  return null;
};


export default CustomToolTip;