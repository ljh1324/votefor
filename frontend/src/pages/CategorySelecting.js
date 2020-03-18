import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { AppStateContext, AppDispatchContext } from "../context";
import { handleCategorySet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import CategoryList from "../components/CategoryList";
import Button from "../components/Button";

import { objectToList } from "../utils/convert";

const CategorySelecting = () => {
  const history = useHistory();
  const {
    state: { categories }
  } = useContext(AppStateContext);

  const categoryList = objectToList(categories, "name");
  if (categoryList.length === 0) {
    history.push("/");
  }

  const { dispatch } = useContext(AppDispatchContext);
  const [count, setCount] = useState(0);

  const handleLinkBtnClick = () => {
    if (count !== 0) {
      history.push("/promise/0");
    } else {
      history.push("/result");
    }
  };

  const toggleCategoryVotedState = categoryName => () => {
    let category = categories[categoryName];
    category.voted = !category.voted;
    if (category.voted) {
      setCount(count + 1);
    }
    dispatch(handleCategorySet(categoryName, category));
  };

  return (
    <GS.FlexWrapWithHorizontalCentering>
      <TitleWithLogo />
      <CategoryList categories={categoryList} toggleCategoryVotedState={toggleCategoryVotedState} />
      <Button
        text={"다음"}
        color={"#1abc9c"}
        activeColor={"#16a085"}
        width={"68vw"}
        height={"70px"}
        fontColor={"white"}
        fontSize={"1.5rem"}
        onClick={handleLinkBtnClick}
      />
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default CategorySelecting;
