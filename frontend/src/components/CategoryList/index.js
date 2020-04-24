import React from "react";
import * as S from "./styled";
import Category from "../Category";

const CategoryList = ({ categories, toggleCategoryVotedState }) => {
  const renderingCategories = categories.map(({ name, voted }, idx) => {
    return (
      <Category
        key={name}
        name={name}
        voted={voted}
        toggleCategoryVotedState={toggleCategoryVotedState(name)}
        order={idx}
      />
    );
  });

  return <S.ListWrapper>{renderingCategories}</S.ListWrapper>;
};

export default CategoryList;
