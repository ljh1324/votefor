import React, { useContext } from "react";

import { AppStateContext } from "../context";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import ResultList from "../components/ResultList";

import { objectToList } from "../utils/convert";

const filterOnlyVotedItem = items => items.filter(item => item.voted);

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

const VotingResult = () => {
  const {
    state: { categories }
  } = useContext(AppStateContext);
  let votingResultList = objectToList(categories, "name");
  let allPromises;

  votingResultList = filterOnlyVotedItem(votingResultList);
  allPromises = getAllPromises(votingResultList);

  votingResultList.push({
    name: "총계",
    promises: allPromises,
    finish: true
  });

  votingResultList.forEach(votingResult => {
    const promises = filterOnlyVotedItem(votingResult.promises);
    const parties = promisesDivideByParty(promises);

    votingResult.total = promises.length;
    votingResult.parties = objectToList(parties, "name");
    votingResult.parties.sort((party1, party2) => {
      return party2.promises.length - party1.promises.length;
    });
  });

  return (
    <GS.FlexWrapWithHorizontalCentering width="100vw">
      <TitleWithLogo />
      <ResultList votingResultList={votingResultList} />
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default VotingResult;
