import PropTypes from "prop-types";

const UserActivityPropTypes = PropTypes.exact({
  day: PropTypes.string.isRequired,
  kilogram: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
}).isRequired;

export const userActivitiesPropTypes = {
  activity: PropTypes.arrayOf(UserActivityPropTypes)
};
