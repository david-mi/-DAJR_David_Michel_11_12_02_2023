import PropTypes from "prop-types";

export const HeadingPropTypes = {
  identity: PropTypes.exact({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }).isRequired
};