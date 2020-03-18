import React from "react";
import * as S from "./styled";

const Title = ({ text }) => {
  return (
    <S.TitleWrapper>
      <S.AppName>{text}</S.AppName>
    </S.TitleWrapper>
  );
};

export default Title;
