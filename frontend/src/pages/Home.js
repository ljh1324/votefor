import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { AppDispatchContext } from "../context";
import { handleCategoriesSet, handlePartiesSet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import Header from "../components/Header";
import Image from "../components/Image";
import Href from "../components/Href";

import { GreenButton } from "../components/buttons";

import { data } from "../promise-data";

const Home = () => {
  const history = useHistory();
  const { dispatch } = useContext(AppDispatchContext);

  const handleLinkBtnClick = () => {
    history.push("/party");
  };

  useEffect(() => {
    const { categories, parties } = data;
    dispatch(handleCategoriesSet(categories));
    dispatch(handlePartiesSet(parties));
  }, [dispatch]);

  return (
    <GS.FlexWrap>
      <Header />
      <Image src={"/vote.png"} width={"200px"} />
      <GreenButton
        text={"투표하기"}
        width={"100px"}
        height={"50px"}
        fontSize={"20px"}
        onClick={handleLinkBtnClick}
      />
      <Href to="/made" title="made by" />
    </GS.FlexWrap>
  );
};

export default Home;
