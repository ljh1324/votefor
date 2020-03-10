import React from "react";
import * as S from "./styled";

const Image = ({ link }) => {
  return (
    <S.ImageWrapper>
      <S.Image src={link} />
    </S.ImageWrapper>
  );
};

export default Image;
