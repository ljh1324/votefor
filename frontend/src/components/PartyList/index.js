import React from "react";
import * as S from "./styled";
import Party from "../Party";

const PartyList = ({ parties, togglePartySelectedState }) => {
  const renderingParties = parties.map(({ name, selected }, idx) => {
    return (
      <Party
        key={name}
        name={name}
        selected={selected}
        togglePartySelectedState={togglePartySelectedState(name)}
        order={idx}
      />
    );
  });

  return <S.ListWrapper>{renderingParties}</S.ListWrapper>;
};

export default PartyList;
