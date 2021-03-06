import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { AppStateContext, AppDispatchContext } from "../context";
import { handleCategoriesSet, handlePartiesSet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import AHref from "../components/AHref";
import ResultList from "../components/ResultList";
import { GreenButton } from "../components/buttons";

import { objectToList } from "../utils/convert";
import {
  filterOnlyVotedItem,
  filterOnlyVotedStateItem,
  filterOnlySelectedPartiesCategory
} from "../utils/filter";

const getAllPromises = votingResultList =>
  votingResultList.reduce((allPromises, { promises }) => allPromises.concat(promises), []);

const promisesDivideByParty = promises =>
  promises.reduce((promisesPerParty, promise) => {
    const {
      summary,
      contents,
      party: { name, color, image }
    } = promise;

    if (!(name in promisesPerParty)) {
      promisesPerParty[name] = {
        color,
        image,
        promises: []
      };
    }
    promisesPerParty[name].promises.push({ summary, contents });
    return promisesPerParty;
  }, {});

const extractVotedPromisesAndDividedByParties = (categories, parties) => {
  let votingResultList = objectToList(categories, "name");
  let allPromises;

  votingResultList = filterOnlyVotedItem(votingResultList);
  votingResultList = filterOnlySelectedPartiesCategory(votingResultList, parties);
  allPromises = getAllPromises(votingResultList);

  votingResultList.push({
    name: "총계",
    promises: allPromises,
    finish: true
  });

  votingResultList.forEach(votingResult => {
    const promises = filterOnlyVotedStateItem(votingResult.promises);
    const parties = promisesDivideByParty(promises);

    votingResult.total = promises.length;
    votingResult.parties = objectToList(parties, "name");
    votingResult.parties.sort((party1, party2) => {
      return party2.promises.length - party1.promises.length;
    });
  });

  return votingResultList;
};

const VotingResult = () => {
  const {
    state: { categories, originalCategories, parties, originalParties }
  } = useContext(AppStateContext);
  const { dispatch } = useContext(AppDispatchContext);
  const history = useHistory();

  const votingResultList = extractVotedPromisesAndDividedByParties(categories, parties);
  const handleRedoBtnClick = () => {
    dispatch(handleCategoriesSet(originalCategories));
    dispatch(handlePartiesSet(originalParties));
    history.push("/party");
  };

  const handleHomeBtnClick = () => {
    history.push("/made");
  };

  return (
    <GS.FlexWrapWithHorizontalCentering width="90%">
      <TitleWithLogo text="투표 결과" />
      <ResultList votingResultList={votingResultList} />
      <AHref to="http://policy.nec.go.kr/" title="자세한 정책내용" />
      <GS.FlexRowDirWrapDependOnScreenSize>
        <GreenButton
          text="다시 하기"
          width="100%"
          height="70px"
          fontSize="1.5rem"
          onClick={handleRedoBtnClick}
        />
        <GreenButton
          text="만든이"
          width="100%"
          height="70px"
          fontSize="1.5rem"
          onClick={handleHomeBtnClick}
        />
      </GS.FlexRowDirWrapDependOnScreenSize>
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default VotingResult;
