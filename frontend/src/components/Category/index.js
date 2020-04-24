import React from "react";
import * as S from "./styled";

const Category = ({ name, voted, toggleCategoryVotedState, order }) => {
  return (
    <S.ItemWrapper voted={voted} onClick={toggleCategoryVotedState} order={order}>
      <S.Text>{name}</S.Text>
    </S.ItemWrapper>
  );
};

export default Category;
