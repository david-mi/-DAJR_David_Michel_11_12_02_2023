import styles from "./customToolTip.module.css";
import { CustomToolTipPropTypes } from "./propTypes";

/**
 * @typedef Payload
 * @type {Object}
 * @property {string} unit
 * @property {number} value
 */

/**
 * Create a custom Tooltip component for AverageSessions
 * 
 * @param {Object} props 
 * @param {boolean} props.active
 * @param {Array<Payload>} props.payload
 */

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

CustomToolTip.propTypes = CustomToolTipPropTypes;

export default CustomToolTip;