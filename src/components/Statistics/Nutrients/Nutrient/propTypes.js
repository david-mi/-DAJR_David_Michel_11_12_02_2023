import PropTypes from "prop-types";

export const NutrientPropTypes = {
  nutrient: PropTypes.exact({
    name: PropTypes.string.isRequired,
    unit: PropTypes.oneOf(["kCal", "g"]).isRequired,
    count: PropTypes.number.isRequired,
    Icon: PropTypes.elementType.isRequired
  }).isRequired
};