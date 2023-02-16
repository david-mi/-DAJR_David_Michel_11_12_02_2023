import PropTypes from "prop-types";

const UserNutrientPropTypes = PropTypes.exact({
  name: PropTypes.string.isRequired,
  unit: PropTypes.oneOf(["kCal", "g"]).isRequired,
  count: PropTypes.number.isRequired,
  Icon: PropTypes.elementType.isRequired
}).isRequired;

const UserIdentityPropTypes = PropTypes.exact({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}).isRequired;

const UserInformationsPropTypes = PropTypes.exact({
  id: PropTypes.number.isRequired,
  identity: UserIdentityPropTypes,
  todayScore: PropTypes.number.isRequired,
  nutrients: PropTypes.arrayOf(UserNutrientPropTypes)
}).isRequired;

const UserActiviyPropTypes = PropTypes.exact({
  day: PropTypes.string.isRequired,
  kilogram: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired
}).isRequired;

const UserAverageSessionPropTypes = PropTypes.exact({
  day: PropTypes.number.isRequired,
  sessionLength: PropTypes.number.isRequired,
}).isRequired;

const UserPerformancesPropTypes = PropTypes.exact({
  value: PropTypes.number.isRequired,
  kind: PropTypes.oneOf(["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"]).isRequired
}).isRequired;

export const StatisticsPropTypes = {
  userData: PropTypes.shape({
    informations: UserInformationsPropTypes,
    activity: PropTypes.arrayOf(UserActiviyPropTypes),
    averageSessions: PropTypes.arrayOf(UserAverageSessionPropTypes),
    performance: PropTypes.arrayOf(UserPerformancesPropTypes)
  })
};