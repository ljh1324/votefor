import React from "react";
import * as S from "./styled";
import PartyPromise from "../PartyPromise";

const PartyPromiseList = ({ promises }) => {
  const renderingCategories = promises.map(({ summary, contents }, idx) => {
    return <PartyPromise key={idx} summary={summary} contents={contents} />;
  });
  return <S.ListWrapper>{renderingCategories}</S.ListWrapper>;
};

export default PartyPromiseList;
