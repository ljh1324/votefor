import React from "react";

const OMark = ({ size, strokeWidth }) => {
  const radius = size / 2;
  const cx = radius;
  const cy = radius;

  return (
    <svg width={size + strokeWidth * 2} height={size + strokeWidth * 2}>
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
