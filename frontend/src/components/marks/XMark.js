import React from "react";

const XMark = ({ size, strokeWidth }) => {
  const side = size + strokeWidth * 2;
  const viewBox = `0 0 ${side} ${side}`;

  return (
    <svg width={side} height={side} viewBox={viewBox}>
      <line
        x1={strokeWidth}
        y1={strokeWidth}
        x2={size + strokeWidth}
        y2={size + strokeWidth}
        stroke="#3498db"
        strokeWidth={strokeWidth}
      />
      <line
        x1={size + strokeWidth}
        y1={strokeWidth}
        x2={strokeWidth}
        y2={size + strokeWidth}
        stroke="#3498db"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default XMark;
