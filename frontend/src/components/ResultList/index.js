import React from "react";

import Result from "../Result";
import * as S from "./styled";

const ResultList = ({ votingResultList }) => {
  const renderingVotingResult = votingResultList.map(({ name, parties, total, finish }) => (
    <Result key={name} name={name} parties={parties} total={total} finish={finish} />
  ));

  return <S.ListWrapper>{renderingVotingResult}</S.ListWrapper>;
};

export default ResultList;
