import PropTypes from "prop-types";

export const HeaderPropTypes = {
  Logo: PropTypes.elementType.isRequired,
  links: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};