import React, { useContext } from "react";

import { AppStateContext } from "../context";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import CategoryList from "../components/CategoryList";
import Button from "../components/Button";

import { objectToList } from "../utils/convert";

const Voting = () => {
  const { state } = useContext(AppStateContext);
  const categoryList = objectToList(state.categories, "name");

  return (
    <GS.FlexWrapWithHorizontalCentering width="100vw">
      <TitleWithLogo />
      <CategoryList categories={categoryList} />
      <Button
        text={"확인"}
        color={"#1abc9c"}
        activeColor={"#16a085"}
        width={"68vw"}
        height={"70px"}
        fontColor={"white"}
        fontSize={"1.5rem"}
      />
    </GS.FlexWrapWithHorizontalCentering>
  );
};

export default Voting;
