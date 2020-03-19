import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { AppStateContext, AppDispatchContext } from "../context";
import { handleCategorySet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import CategoryList from "../components/CategoryList";
import Button from "../components/Button";

import { objectToList } from "../utils/convert";
import { filterOnlySelectedPartiesCategory } from "../utils/filter";

const CategorySelecting = () => {
  const history = useHistory();
  const {
    state: { categories, parties }
  } = useContext(AppStateContext);

  useEffect(() => {
    window.scroll({
      top: 0
    });
  }, []);

  let categoryList = objectToList(categories, "name");
  if (categoryList.length === 0) {
    history.push("/");
  }

  categoryList = filterOnlySelectedPartiesCategory(categoryList, parties);

  const { dispatch } = useContext(AppDispatchContext);

  const handleNextBtnClick = () => {
    const count = categoryList.reduce((count, category) => {
      count += category.voted ? 1 : 0;
      return count;
    }, 0);

    if (count !== 0) {
      history.push("/promise/0");
    } else {
      history.push("/result");
    }
  };

  const handlePreviousBtnClick = () => {
    history.goBack();
  };

  const toggleCategoryVotedState = categoryName => () => {
    let category = categories[categoryName];
    category.voted = !category.voted;
    dispatch(handleCategorySet(categoryName, category));
  };

  return (
    <GS.FlexWrapWithHorizontalCentering>
      <TitleWithLogo text="관심 분야 선택" />
      <CategoryList categories={categoryList} toggleCategoryVotedState={toggleCategoryVotedState} />
      <GS.FlexRowDirWrap>
        <Button
          text={"이전"}
          color={"white"}
          activeColor={"#f1f2f6"}
          width={"35%"}
          height={"70px"}
          fontColor={"black"}
          fontSize={"1.5rem"}
          border={"2px solid black"}
          onClick={handlePreviousBtnClick}
        />
        <Button
          text={"다음"}
          color={"#1abc9c"}
          activeColor={"#16a085"}
          width={"35%"}
          height={"70px"}
          fontColor={"white"}
          fontSize={"1.5rem"}
          onClick={handleNextBtnClick}
        />
      </GS.FlexRowDirWrap>
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default CategorySelecting;
