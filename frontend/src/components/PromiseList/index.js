import React from "react";
import * as S from "./styled";
import ElectionPromise from "../ElectionPromise";

const PromiseList = ({ promises, setPromises }) => {
  const renderingCategories = promises.map(({ summary, contents, voted }, idx) => {
    const handleClickPromise = () => {
      let newPromises = [...promises];
      newPromises[idx].voted = !newPromises[idx].voted;
      setPromises(newPromises);
    };

    return (
      <ElectionPromise
        key={idx}
        summary={summary}
        contents={contents}
        voted={voted}
        handleClickPromise={handleClickPromise}
      />
    );
  });
  return <S.ListWrapper>{renderingCategories}</S.ListWrapper>;
};

export default PromiseList;
