import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { AppStateContext, AppDispatchContext } from "../context";
import { handleCategoriesSet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import ResultList from "../components/ResultList";
import Button from "../components/Button";

import { objectToList } from "../utils/convert";
import { filterOnlyVotedItem } from "../utils/filter";

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

const extractVotedPromisesAndDividedByParties = categories => {
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

  return votingResultList;
};

const VotingResult = () => {
  const {
    state: { categories, originalCategories }
  } = useContext(AppStateContext);
  const { dispatch } = useContext(AppDispatchContext);
  const history = useHistory();

  const votingResultList = extractVotedPromisesAndDividedByParties(categories);
  const handleRedoBtnClick = () => {
    dispatch(handleCategoriesSet(originalCategories));
    history.push("/category");
  };

  return (
    <GS.FlexWrapWithHorizontalCentering>
      <TitleWithLogo />
      <ResultList votingResultList={votingResultList} />
      <Button
        text="다시 하기"
        color="#1abc9c"
        activeColor="#16a085"
        width="50%"
        max
        height="70px"
        fontColor="white"
        fontSize="1.5rem"
        onClick={handleRedoBtnClick}
      />
      <Button
        text="다른 사람들은?"
        color="#1abc9c"
        activeColor="#16a085"
        width="50%"
        height="70px"
        fontColor="white"
        fontSize="1.5rem"
        onClick={handleRedoBtnClick}
      />
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default VotingResult;
