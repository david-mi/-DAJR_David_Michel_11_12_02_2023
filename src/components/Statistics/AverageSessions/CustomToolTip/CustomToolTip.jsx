import styles from "./customToolTip.module.css";

const CustomToolTip = ({ active, payload }) => {
  if (active && payload?.length) {
    const { value: sessionLength, unit } = payload[0];

    return (
      <div className={styles.tooltip}>
        {sessionLength} {unit}
      </div>
    );
  }

  return null;
};


export default CustomToolTip;