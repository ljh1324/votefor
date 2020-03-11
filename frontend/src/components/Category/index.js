import React from "react";
import * as S from "./styled";

const Category = ({ name, voted }) => {
  return <S.ItemWrapper voted={voted}>{name}</S.ItemWrapper>;
};

export default Category;
