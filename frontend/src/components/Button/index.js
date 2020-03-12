import React from "react";
import * as S from "./styled";

const Button = ({
  text,
  color,
  activeColor,
  width,
  height,
  fontColor,
  fontSize,
  onClick,
  border
}) => {
  return (
    <S.Button
      color={color}
      activeColor={activeColor}
      width={width}
      height={height}
      fontColor={fontColor}
      fontSize={fontSize}
      border={border}
      onClick={onClick}
    >
      {text}
    </S.Button>
  );
};

export default Button;
