import React from "react";
import * as S from "./styled";

const Image = ({ src, width, height }) => {
  return <S.Image src={src} width={width} height={height} />;
};

export default Image;
