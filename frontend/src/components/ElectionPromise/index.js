import React, { useState, useRef } from "react";
import * as S from "./styled";
import { ACCEPT, REJECT } from "../../utils/voted-state";
import OMark from "../marks/OMark";
import XMark from "../marks/XMark";

const DELTA = 150;

const ElectionPromise = ({ summary, contents, voted, setPromiseVotedState }) => {
  const [isClicked, setState] = useState(false);
  const lines = contents.split("\n");
  const itemRef = useRef();

  const handlePromiseClick = e => {
    if (!isClicked) {
      const offsetTop = e.target.offsetTop;

      setTimeout(() => {
        window.scroll({
          top: offsetTop - DELTA,
          behavior: "smooth"
        });
      }, 100);
    }
    setState(!isClicked);
  };

  const handleOMarkClick = e => {
    const { offsetTop } = itemRef.current;

    window.scroll({
      top: offsetTop - DELTA,
      behavior: "smooth"
    });

    setState(!isClicked);
    setPromiseVotedState(ACCEPT);
  };

  const handleXMarkClick = () => {
    const { offsetTop } = itemRef.current;

    window.scroll({
      top: offsetTop - DELTA,
      behavior: "smooth"
    });

    setState(!isClicked);
    setPromiseVotedState(REJECT);
  };

  const renderingLines = lines.map(line => <S.LineWrapper>- {line}</S.LineWrapper>);

  return (
    <>
      <S.ItemWrapper isClicked={isClicked || voted} onClick={handlePromiseClick} ref={itemRef}>
        {summary}
        {voted === 1 ? (
          <S.SVGWrapper marginLeft={"5px"}>
            <OMark size={12} strokeWidth={3} />
          </S.SVGWrapper>
        ) : null}
        {voted === 2 ? (
          <S.SVGWrapper marginLeft={"5px"}>
            <XMark size={12} strokeWidth={3} />
          </S.SVGWrapper>
        ) : null}
      </S.ItemWrapper>
      <S.ContentsWrapper isClicked={isClicked}>
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
