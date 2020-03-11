import React from "react";

import * as GS from "../components/GlobalStyle";
import TitleWithLogo from "../components/TitleWithLogo";
import CategoryList from "../components/CategoryList";
import Button from "../components/Button";

const dummy = [
  {
    name: "기술",
    voted: false,
    promises: []
  },
  {
    name: "교육",
    voted: true,
    promises: []
  },
  {
    name: "국방",
    voted: false,
    promises: []
  },
  {
    name: "농림",
    voted: false,
    promises: []
  },
  {
    name: "보건",
    voted: true,
    promises: []
  },
  {
    name: "사회복지",
    voted: true,
    promises: []
  },
  {
    name: "기타",
    voted: false,
    promises: []
  }
];

const Voting = () => {
  return (
    <GS.FlexWrapWithHorizontalCentering>
      <TitleWithLogo />
      <CategoryList categories={dummy} />
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
