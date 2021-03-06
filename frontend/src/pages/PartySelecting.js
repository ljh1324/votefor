import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { AppStateContext, AppDispatchContext } from "../context";
import { handlePartySet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import PartyList from "../components/PartyList";
import Message from "../components/Message";
import { GreenButton, BackButton } from "../components/buttons";

import { objectToList } from "../utils/convert";
import { sortBy } from "../utils/sort";

const PartySelecting = () => {
  const history = useHistory();
  const {
    state: { parties }
  } = useContext(AppStateContext);

  const partyList = objectToList(parties, "name");
  if (partyList.length === 0) {
    history.push("/");
  }
  sortBy(partyList, "name");

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
      <TitleWithLogo text="관심 정당 선택" />
      <Message text="관심 정당을 선택 후 다음 버튼을 눌러주세요!" />
      <GS.MessageWrapper>
        <Message text="비례대표 투표 참여 정당만 있으며" />
        <Message text="2020.3.21 ~ 4.6 중앙선거관리위원회에" />
        <Message text="등록된 공약들의 정당입니다." />
      </GS.MessageWrapper>
      <PartyList parties={partyList} togglePartySelectedState={togglePartySelectedState} />
      <GS.FlexRowDirWrap>
        <BackButton width="40%" height="70px" fontSize="1.5rem" />
        <GreenButton
          text="다음"
          width="40%"
          height="70px"
          fontSize="1.5rem"
          onClick={handleLinkBtnClick}
        />
      </GS.FlexRowDirWrap>
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default PartySelecting;
