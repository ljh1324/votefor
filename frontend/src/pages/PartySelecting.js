import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { AppStateContext, AppDispatchContext } from "../context";
import { handlePartySet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import PartyList from "../components/PartyList";
import Button from "../components/Button";

import { objectToList } from "../utils/convert";

const PartySelecting = () => {
  const history = useHistory();
  const {
    state: { parties }
  } = useContext(AppStateContext);

  const partyList = objectToList(parties, "name");
  if (partyList.length === 0) {
    history.push("/");
  }

  const { dispatch } = useContext(AppDispatchContext);

  const handleLinkBtnClick = () => {
    const count = partyList.reduce((count, party) => {
      count += party.selected ? 1 : 0;
      return count;
    }, 0);

    if (count !== 0) {
      history.push("/category");
    } else {
      history.push("/result");
    }
  };

  const togglePartySelectedState = partyName => () => {
    let party = parties[partyName];
    party.selected = !party.selected;
    dispatch(handlePartySet(partyName, party));
  };

  return (
    <GS.FlexWrapWithHorizontalCentering>
      <TitleWithLogo text="관심있는 정당 선택" />
      <PartyList parties={partyList} togglePartySelectedState={togglePartySelectedState} />
      <Button
        text={"다음"}
        color={"#1abc9c"}
        activeColor={"#16a085"}
        width={"68vw"}
        height={"70px"}
        fontColor={"white"}
        fontSize={"1.5rem"}
        onClick={handleLinkBtnClick}
      />
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default PartySelecting;
