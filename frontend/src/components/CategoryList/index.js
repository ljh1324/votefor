import React from "react";
import * as S from "./styled";
import Category from "../Category";

const CategoryList = ({ categories }) => {
  const renderingCategories = categories.map(({ name, voted }) => (
    <Category name={name} voted={voted} />
  ));

  return <S.ListWrapper>{renderingCategories}</S.ListWrapper>;
};

export default CategoryList;
