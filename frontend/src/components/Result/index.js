import React, { Fragment } from "react";

import * as S from "./styled";
import PartyPromiseList from "../PartyPromiseList";
import CircleGraph from "../CircleGraph";
import Image from "../Image";

import { getGraphSize } from "../../utils/sizing";

const Result = ({ name, parties, total, finish }) => {
  if (total === 0) {
    return (
      <S.ResultWrapper>
        <S.CategoryText finish={finish}>{name}</S.CategoryText>
        <S.ImageWrapper>
          <Image src="/box.png" width="200px" height="200px" />
        </S.ImageWrapper>
        <S.Text fontSize="1.5rem">원하는 공약이 없어요.</S.Text>
      </S.ResultWrapper>
    );
  }

  const renderingParties = parties.map(({ promises, color, image }) => (
    <Fragment key={image}>
      <S.PartyWrapper>
        <Image src={`/${image}`} width="80px" />
        <S.Line width={`${(promises.length / total) * 65}%`} color={color} height={"30px"} />
        <S.Text fontSize="0.9rem">{`${Math.round((promises.length / total) * 1000) / 10}% (${
          promises.length
        }표)`}</S.Text>
      </S.PartyWrapper>
      <PartyPromiseList promises={promises} />
    </Fragment>
  ));

  const nums = [];
  const items = [];
  parties.forEach(({ name, promises, color }) => {
    nums.push(promises.length);
    items.push({ name, color });
  });

  return (
    <S.ResultWrapper>
      <S.CategoryText finish={finish}>{name}</S.CategoryText>
      <CircleGraph nums={nums} items={items} total={total} width={getGraphSize()} padding={10} />
      <S.Line />
      {renderingParties}
    </S.ResultWrapper>
  );
};

export default Result;
