import React from 'react';
import { Rectangle } from "recharts";
import { CustomCursorPropTypes } from "./propTypes";

/**
 * Create a custom Tooltip cursor svg component for Activity
 * 
 * @param {Object} props 
 * @param {number} props.x
 * @param {number} props.y
 * @param {number} props.height
 */

const CustomCursor = (props) => {
  const { x, y, height } = props;

  return (
    <Rectangle
      height={height}
      x={x - 26}
      y={y}
      width={50}
      fill="#C4C4C4"
      opacity={0.5}
    />
  );
};

CustomCursor.propTypes = CustomCursorPropTypes;

export default CustomCursor;