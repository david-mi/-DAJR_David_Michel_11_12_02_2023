import PropTypes from "prop-types";

const UserPerformancePropTypes = PropTypes.exact({
  value: PropTypes.number.isRequired,
  kind: PropTypes.oneOf(["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"]).isRequired
}).isRequired;


export const UserPerformancesPropTypes = {
  activity: PropTypes.arrayOf(UserPerformancePropTypes)
};