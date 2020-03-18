import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";

import { AppStateContext, AppDispatchContext } from "../context";
import { handlePromisesSet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import CategoryTitle from "../components/CategoryTitle";
import PromiseList from "../components/PromiseList";
import Button from "../components/Button";

import { objectToList } from "../utils/convert";
import { filterOnlyVotedItem } from "../utils/filter";

const PromiseSelecting = ({ match }) => {
  const history = useHistory();
  const {
    state: { categories }
  } = useContext(AppStateContext);
  const { dispatch } = useContext(AppDispatchContext);

  let categoryList = objectToList(categories, "name");
  if (categoryList.length === 0) {
    return <Redirect to="/" />;
  }

  categoryList = filterOnlyVotedItem(categoryList);
  if (categoryList.length === 0) {
    return <Redirect to="/result" />;
  }

  const { page } = match.params;
  const length = categoryList.length;
  const name = categoryList[page].name;

  const setPromises = promises => {
    dispatch(handlePromisesSet(name, promises));
  };

  const handleNextBtnClick = () => {
    if (parseInt(page) + 1 === length) {
      history.push("/result");
    } else {
      history.push(`/promise/${parseInt(page) + 1}`);
    }
  };

  const handlePreviousBtnClick = () => {
    if (parseInt(page) === 0) {
      history.push("/category");
    } else {
      history.push(`/promise/${parseInt(page) - 1}`);
    }
  };

  return (
    <GS.FlexWrapWithHorizontalCentering width="80%">
      <TitleWithLogo />
      <CategoryTitle name={name} />
      <PromiseList promises={categories[name].promises} setPromises={setPromises} />
      <GS.FlexRowDirWrap>
        <Button
          text={"이전"}
          color={"white"}
          activeColor={"#f1f2f6"}
          width={"40%"}
          height={"70px"}
          fontColor={"black"}
          fontSize={"1.5rem"}
          border={"2px solid black"}
          onClick={handlePreviousBtnClick}
        />
        <Button
          text={page + 1 === length ? "제출" : "다음"}
          color={"#1abc9c"}
          activeColor={"#16a085"}
          width={"40%"}
          height={"70px"}
          fontColor={"white"}
          fontSize={"1.5rem"}
          onClick={handleNextBtnClick}
        />
      </GS.FlexRowDirWrap>
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default PromiseSelecting;
