import PropTypes from "prop-types";

const LinksPropsType = PropTypes.exact({
  route: PropTypes.string.isRequired,
  Logo: PropTypes.elementType.isRequired
}).isRequired;

export const SideNavPropTypes = {
  copyrights: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(LinksPropsType).isRequired
};