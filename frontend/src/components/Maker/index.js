import React from "react";

import AHref from "../AHref";
import Message from "../Message";

import * as S from "./styled";

const Maker = ({ title, makers }) => {
  return (
    <S.ItemWrapper>
      <S.Title>{title}</S.Title>

      {makers.map(maker => {
        const { to, title, isLink } = maker;
        return isLink ? (
          <S.MakerWrapper>
            <AHref to={to} title={title} />
          </S.MakerWrapper>
        ) : (
          <Message text={title} />
        );
      })}
    </S.ItemWrapper>
  );
};

export default Maker;
