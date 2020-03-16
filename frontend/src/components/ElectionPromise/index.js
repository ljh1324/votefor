import React, { useState } from "react";
import * as S from "./styled";
import ElectionMark from "../marks/ElectionMark";
import OMark from "../marks/OMark";
import XMark from "../marks/XMark";

const ElectionPromise = ({ summary, contents, voted, setPromiseVotedState }) => {
  const [isClicked, setState] = useState(false);
  const lines = contents.split("\n");

  const handlePromiseClick = () => {
    setState(!isClicked);
  };

  const handleOMarkClick = () => {
    setState(!isClicked);
    setPromiseVotedState(true);
  };

  const handleXMarkClick = () => {
    setState(!isClicked);
    setPromiseVotedState(false);
  };

  const renderingLines = lines.map(line => <S.LineWrapper>{line}</S.LineWrapper>);

  return (
    <>
      <S.ItemWrapper isClicked={isClicked || voted} onClick={handlePromiseClick}>
        {summary}
        {voted ? (
          <S.SVGWrapper marginLeft={"5px"}>
            <ElectionMark size={17} strokeWidth={2} />
          </S.SVGWrapper>
        ) : null}
      </S.ItemWrapper>
      <S.ContentsWrapper>
        {isClicked ? renderingLines : null}
        {isClicked ? (
          <S.ThumbsWrapper>
            <S.MarkWrapper onClick={handleOMarkClick}>
              <OMark size={18} strokeWidth={3} />
            </S.MarkWrapper>
            <S.MarkWrapper onClick={handleXMarkClick}>
              <XMark size={18} strokeWidth={3} />
            </S.MarkWrapper>
          </S.ThumbsWrapper>
        ) : null}
      </S.ContentsWrapper>
    </>
  );
};

export default ElectionPromise;
