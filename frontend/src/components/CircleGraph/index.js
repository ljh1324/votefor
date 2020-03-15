import React from "react";

import * as S from "./styled";

const polarToCartesian = (centerX, centerY, radius, degrees) => {
  const radians = ((degrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(radians),
    y: centerY + radius * Math.sin(radians)
  };
};

const calculateAngleRanges = (nums, total) => {
  let startAngle = 0;
  let angleRanges = [];

  nums.forEach(num => {
    let angle = (num / total) * 360;
    angleRanges.push({
      start: startAngle,
      end: startAngle + angle
    });
    startAngle += angle;
  });

  return angleRanges;
};

const CircleGraph = ({ nums, items, unit, total, width, padding }) => {
  const cx = width / 2 + padding;
  const cy = width / 2 + padding;
  const radius = width / 2 - padding * 2;

  const angleRanges = calculateAngleRanges(nums, total);

  const renderingCircleGraph = angleRanges.map(({ start, end }, idx) => {
    const startPoint = polarToCartesian(cx, cy, radius, end);
    const endPoint = polarToCartesian(cx, cy, radius, start);
    const largeArcFlag = end - start <= 180 ? "0" : "1";

    const d = [
      "M",
      startPoint.x,
      startPoint.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      endPoint.x,
      endPoint.y,
      "L",
      cx,
      cy,
      "Z"
    ].join(" ");

    return <path d={d} stroke="white" strokeWidth="7" fill={items[idx].color}></path>;
  });

  const renderingItems = items.map(({ name, color }) => (
    <S.ItemWrapper>
      <S.Color color={color} />
      <S.Name>{name}</S.Name>
    </S.ItemWrapper>
  ));

  return (
    <S.GraphWrapper>
      <svg width={width} height={width}>
        {renderingCircleGraph}
        <circle cx={cx} cy={cy} r={radius / 3} fill="white" />
      </svg>
      <S.DescWrapper>{renderingItems}</S.DescWrapper>
    </S.GraphWrapper>
  );
};

export default CircleGraph;
