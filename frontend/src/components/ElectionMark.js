import React from "react";

const ElectionMark = ({ size, strokeWidth, top }) => {
  const radius = size / 2;
  const cx = radius;
  const cy = radius;
  const angle = 120;
  const radians = ((angle - 90) * Math.PI) / 180.0;
  const nx = cx + radius * Math.cos(radians);
  const ny = cy + radius * Math.sin(radians);

  return (
    <svg width={size + strokeWidth * 2} height={size + strokeWidth * 2}>
      <circle
        cx={cx + strokeWidth}
        cy={cy + strokeWidth}
        r={radius}
        fill="none"
        stroke="red"
        strokeWidth={strokeWidth}
      />
      <line
        x1={cx + strokeWidth}
        y1={strokeWidth}
        x2={cx + strokeWidth}
        y2={size + strokeWidth}
        stroke="red"
        strokeWidth={strokeWidth}
      />
      <line
        x1={cx + strokeWidth}
        y1={cy + strokeWidth}
        x2={nx + strokeWidth}
        y2={ny + strokeWidth}
        stroke="red"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default ElectionMark;
