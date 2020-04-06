import React, { Fragment } from "react";
import * as S from "./styled";
import ElectionPromise from "../ElectionPromise";

const PromiseList = ({ promises, setPromises, parties }) => {
  const renderingCategories = promises.map(({ summary, contents, voted, no, party }) => {
    if (!parties[party.name].selected) {
      return <Fragment key={no}></Fragment>;
    }

    const setPromiseVotedState = voted => {
      const idx = promises.findIndex(promise => promise.no === no);

      let newPromises = [...promises];

      newPromises[idx].voted = voted;
      setPromises(newPromises);
    };

    return (
      <ElectionPromise
        key={no}
        summary={summary}
        contents={contents}
        voted={voted}
        setPromiseVotedState={setPromiseVotedState}
      />
    );
  });
  return <S.ListWrapper>{renderingCategories}</S.ListWrapper>;
};

export default PromiseList;
