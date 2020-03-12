import React from "react";
import * as S from "./styled";

const CategoryTitle = ({ name }) => {
  return (
    <S.TitleWrapper>
      <S.Text>{name}</S.Text>
    </S.TitleWrapper>
  );
};

export default CategoryTitle;
