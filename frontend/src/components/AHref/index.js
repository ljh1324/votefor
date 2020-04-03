import React from "react";

import * as S from "./styled";

const AHref = ({ to, title }) => {
  return (
    <S.ATag href={to} target="_blank">
      {title}
    </S.ATag>
  );
};

export default AHref;
