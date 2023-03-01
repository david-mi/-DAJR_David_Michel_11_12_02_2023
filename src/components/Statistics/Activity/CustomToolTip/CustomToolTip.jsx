import styles from "./customToolTip.module.css";
import { CustomToolTipPropTypes } from "./propTypes";

/**
 * @typedef Payload
 * @type {Object}
 * @property {string} unit
 * @property {number} value
 */

/**
 * Create a custom Tooltip component for Activity
 * 
 * @param {Object} props 
 * @param {boolean} props.active
 * @param {Array<Payload>} props.payload
 */

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

CustomToolTip.propTypes = CustomToolTipPropTypes;


export default CustomToolTip;