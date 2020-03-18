import React from "react";
import * as S from "./styled";

const Category = ({ name, voted, toggleCategoryVotedState }) => {
  return (
    <S.ItemWrapper voted={voted} onClick={toggleCategoryVotedState}>
      <S.Text>{name}</S.Text>
    </S.ItemWrapper>
  );
};

export default Category;
