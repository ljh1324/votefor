import React from "react";
import * as S from "./styled";
import ElectionMark from "../marks/ElectionMark";

const ElectionPromise = ({ summary, contents }) => {
  return (
    <S.ItemWrapper>
      {summary}
      <S.SVGWrapper marginLeft={"5px"}>
        <ElectionMark size={10} strokeWidth={1} />
      </S.SVGWrapper>
    </S.ItemWrapper>
  );
};

export default ElectionPromise;
