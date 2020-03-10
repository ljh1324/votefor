import React from "react";
import * as S from "./styled";

const Button = ({ text, color, activeColor, width, height, fontColor, fontSize }) => {
  return (
    <S.Button
      color={color}
      activeColor={activeColor}
      width={width}
      height={height}
      fontColor={fontColor}
      fontSize={fontSize}
    >
      {text}
    </S.Button>
  );
};

export default Button;
