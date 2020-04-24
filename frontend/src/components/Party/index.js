import React from "react";
import * as S from "./styled";

const Party = ({ name, selected, togglePartySelectedState, order }) => {
  return (
    <S.ItemWrapper selected={selected} onClick={togglePartySelectedState} order={order}>
      <S.Text>{name}</S.Text>
    </S.ItemWrapper>
  );
};

export default Party;
