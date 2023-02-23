import PropTypes from "prop-types";

export const StatisticsPropTypes = {
  userData: PropTypes.shape({
    informations: PropTypes.object.isRequired,
    activity: PropTypes.array.isRequired,
    averageSessions: PropTypes.array.isRequired,
    performance: PropTypes.array.isRequired
  })
};