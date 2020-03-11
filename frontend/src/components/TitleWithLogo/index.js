import React from "react";
import * as S from "./styled";

import Title from "../Title";
import Image from "../Image";

const TitleWithLogo = () => {
  return (
    <S.Wrapper>
      <S.WrapperItem>
        <Image src={"/vote.png"} width={"50px"} />
      </S.WrapperItem>
      <Title />
      <S.DummyItem width={"30px"} />
    </S.Wrapper>
  );
};

export default TitleWithLogo;
