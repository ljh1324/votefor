import React from "react";

const OMark = ({ size, strokeWidth }) => {
  const radius = size / 2;
  const cx = radius;
  const cy = radius;
  const side = size + strokeWidth * 2;
  const viewBox = `0 0 ${side} ${side}`;
  return (
    <svg width={side} height={side} viewBox={viewBox}>
      <circle
        cx={cx + strokeWidth}
        cy={cy + strokeWidth}
        r={radius}
        fill="none"
        stroke="#e74c3c"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default OMark;
