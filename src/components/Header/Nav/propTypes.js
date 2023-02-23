import PropTypes from "prop-types";

export const NavPropTypes = {
  links: PropTypes.arrayOf(PropTypes.exact({
    route: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};