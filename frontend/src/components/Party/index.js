import React from "react";
import * as S from "./styled";

const Party = ({ name, selected, togglePartySelectedState }) => {
  return (
    <S.ItemWrapper selected={selected} onClick={togglePartySelectedState}>
      <S.Text>{name}</S.Text>
    </S.ItemWrapper>
  );
};

export default Party;
