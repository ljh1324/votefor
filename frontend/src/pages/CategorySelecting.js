import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { AppStateContext, AppDispatchContext } from "../context";
import { handleCategorySet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import CategoryList from "../components/CategoryList";
import { GreenButton, BackButton } from "../components/buttons";

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
        <BackButton width="35%" height="70px" fontSize="1.5rem" />
        <GreenButton
          text="다음"
          width="35%"
          height="70px"
          onClick={handleNextBtnClick}
          fontSize="1.5rem"
        />
      </GS.FlexRowDirWrap>
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default CategorySelecting;
