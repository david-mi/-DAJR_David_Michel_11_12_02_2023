import PropTypes from "prop-types";

const PayloadPropTypes = PropTypes.shape({
  value: PropTypes.number,
  unit: PropTypes.string
});

export const CustomToolTipPropTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PayloadPropTypes)
};