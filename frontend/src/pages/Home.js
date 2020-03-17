import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { AppDispatchContext } from "../context";
import { handleCategoriesSet } from "../context/reducer";

import * as GS from "../components/GlobalStyle";
import Header from "../components/Header";
import Image from "../components/Image";
import Button from "../components/Button";

import request from "../utils/request";

const Home = () => {
  const history = useHistory();
  const { dispatch } = useContext(AppDispatchContext);

  const handleLinkBtnClick = () => {
    history.push("/voting");
  };

  useEffect(() => {
    request
      .get("/v1/promise")
      .then(res => res.json())
      .then(res => {
        dispatch(handleCategoriesSet(res.categories));
      });
  }, [dispatch]);

  return (
    <GS.FlexWrap>
      <Header />
      <Image src={"/vote.png"} width={"200px"} />
      <Button
        text={"투표하기"}
        color={"#1abc9c"}
        activeColor={"#16a085"}
        width={"100px"}
        height={"50px"}
        fontColor={"white"}
        fontSize={"20px"}
        onClick={handleLinkBtnClick}
      />
    </GS.FlexWrap>
  );
};

export default Home;
