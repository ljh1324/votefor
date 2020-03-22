import React, { useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

import { AppStateContext, AppDispatchContext } from "../context";
import { handlePromisesSet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import CategoryTitle from "../components/CategoryTitle";
import PromiseList from "../components/PromiseList";
import Message from "../components/Message";
import { GreenButton, BackButton } from "../components/buttons";

import { objectToList } from "../utils/convert";
import { filterOnlyVotedItem, filterOnlySelectedPartiesCategory } from "../utils/filter";

const PromiseSelecting = ({ match }) => {
  const history = useHistory();
  const {
    state: { categories, parties }
  } = useContext(AppStateContext);
  const { dispatch } = useContext(AppDispatchContext);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  let categoryList = objectToList(categories, "name");
  if (categoryList.length === 0) {
    return <Redirect to="/" />;
  }

  categoryList = filterOnlyVotedItem(categoryList);
  categoryList = filterOnlySelectedPartiesCategory(categoryList, parties);
  if (categoryList.length === 0) {
    return <Redirect to="/result" />;
  }

  let { page } = match.params;
  const length = categoryList.length;
  const name = categoryList[page].name;
  page = parseInt(page);

  const setPromises = promises => {
    dispatch(handlePromisesSet(name, promises));
  };

  const handleNextBtnClick = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });

    if (page + 1 === length) {
      history.push("/result");
    } else {
      history.push(`/promise/${page + 1}`);
    }
  };

  return (
    <GS.FlexWrapWithHorizontalCentering width="80%">
      <TitleWithLogo text="관심 공약 선택" />
      {page === 0 ? (
        <>
          <Message text="관심 공약을 선택 후" />
          <Message text="찬성하면 'O' 반대하면 'X'를 눌러주세요!" />
        </>
      ) : null}
      <CategoryTitle name={name} />
      <PromiseList
        promises={categories[name].promises}
        setPromises={setPromises}
        parties={parties}
      />
      <GS.FlexRowDirWrap>
        <BackButton text={"이전"} width="40%" height="70px" fontSize="1.5rem" />
        <GreenButton
          text={page + 1 === length ? "투표" : "다음"}
          width="40%"
          height="70px"
          fontSize="1.5rem"
          onClick={handleNextBtnClick}
        />
      </GS.FlexRowDirWrap>
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default PromiseSelecting;
