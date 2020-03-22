import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { AppDispatchContext } from "../context";
import { handleCategoriesSet, handlePartiesSet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import Header from "../components/Header";
import Image from "../components/Image";
import { GreenButton } from "../components/buttons";

import request from "../utils/request";

const Home = () => {
  const history = useHistory();
  const { dispatch } = useContext(AppDispatchContext);

  const handleLinkBtnClick = () => {
    history.push("/party");
  };

  useEffect(() => {
    request
      .get("/v1/promise")
      .then(res => res.json())
      .then(res => {
        dispatch(handleCategoriesSet(res.categories));
        dispatch(handlePartiesSet(res.parties));
      });
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
    </GS.FlexWrap>
  );
};

export default Home;
