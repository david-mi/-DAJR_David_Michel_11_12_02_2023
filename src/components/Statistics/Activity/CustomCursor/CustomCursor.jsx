import React from 'react';
import { Rectangle } from "recharts";

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

export default CustomCursor;