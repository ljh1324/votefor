import React, { useState, useContext } from "react";

import { AppStateContext, AppDispatchContext } from "../context";
import { handlePromisesSet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import CategoryTitle from "../components/CategoryTitle";
import PromiseList from "../components/PromiseList";
import Button from "../components/Button";

import { deepCopy } from "../utils/copy";

const PromiseSelecting = ({ match, history }) => {
  const {
    state: { categories }
  } = useContext(AppStateContext);

  const { dispatch } = useContext(AppDispatchContext);

  const { category } = match.params;
  const categoriesClone = deepCopy(categories[category].promises);
  const [promises, setPromises] = useState(categoriesClone);

  const handleCancleBtnClick = () => {
    setPromises(categoriesClone);
    history.goBack();
  };

  const handleConfirmBtnClick = () => {
    dispatch(handlePromisesSet(category, promises));
    history.goBack();
  };

  return (
    <GS.FlexWrapWithHorizontalCentering>
      <GS.FlexWrapWithHorizontalCentering width="80%">
        <TitleWithLogo />
        <CategoryTitle name={category} />
        <PromiseList promises={promises} setPromises={setPromises} />
        <GS.FlexRowDirWrap>
          <Button
            text={"확인"}
            color={"#1abc9c"}
            activeColor={"#16a085"}
            width={"40%"}
            height={"70px"}
            fontColor={"white"}
            fontSize={"1.5rem"}
            onClick={handleConfirmBtnClick}
          />
          <Button
            text={"취소"}
            color={"white"}
            activeColor={"#f1f2f6"}
            width={"40%"}
            height={"70px"}
            fontColor={"black"}
            fontSize={"1.5rem"}
            border={"2px solid black"}
            onClick={handleCancleBtnClick}
          />
        </GS.FlexRowDirWrap>
      </GS.FlexWrapWithHorizontalCentering>
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default PromiseSelecting;
