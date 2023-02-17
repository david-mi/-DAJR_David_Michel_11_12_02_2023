import PropTypes from "prop-types";

const UserAverageSessionPropTypes = PropTypes.exact({
  day: PropTypes.number.isRequired,
  sessionLength: PropTypes.number.isRequired,
}).isRequired;


export const UserAverageSessionsPropTypes = {
  activity: PropTypes.arrayOf(UserAverageSessionPropTypes)
};
