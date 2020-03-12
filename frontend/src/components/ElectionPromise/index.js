import React from "react";
import * as S from "./styled";
import ElectionMark from "../ElectionMark";

const ElectionPromise = ({ summary, contents, voted, handleClickPromise }) => {
  return (
    <S.ItemWrapper voted={voted} onClick={handleClickPromise}>
      {summary}
      {voted ? (
        <S.SVGWrapper marginLeft={"5px"}>
          <ElectionMark size={17} strokeWidth={2} />
        </S.SVGWrapper>
      ) : null}
    </S.ItemWrapper>
  );
};

export default ElectionPromise;
