import React from "react";

import * as GS from "../components/GlobalStyle";
import Header from "../components/Header";
import Image from "../components/Image";
import Button from "../components/Button";

const Home = () => {
  return (
    <GS.FlexWrap>
      <Header />
      <Image link={"/vote.png"} />
      <Button
        text={"투표하기"}
        color={"#1abc9c"}
        activeColor={"#16a085"}
        width={"100px"}
        height={"50px"}
        fontColor={"white"}
        fontSize={"20px"}
      />
    </GS.FlexWrap>
  );
};

export default Home;
