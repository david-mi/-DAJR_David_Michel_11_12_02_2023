import PropTypes from "prop-types";

const NutrientPropTypes = PropTypes.exact({
  name: PropTypes.string.isRequired,
  unit: PropTypes.oneOf(["kCal", "g"]).isRequired,
  count: PropTypes.number.isRequired,
  Icon: PropTypes.elementType.isRequired
}).isRequired;

export const NutrientsPropTypes = {
  nutrients: PropTypes.arrayOf(NutrientPropTypes).isRequired
};