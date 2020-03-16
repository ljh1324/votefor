import React from "react";

import * as S from "./styled";
import PartyPromiseList from "../PartyPromiseList";
import CircleGraph from "../CircleGraph";
import Image from "../Image";

const Result = ({ name, parties, total, finish }) => {
  if (total === 0) {
    return (
      <S.ResultWrapper>
        <S.CategoryText finish={finish}>{name}</S.CategoryText>
        <S.ImageWrapper>
          <Image src="/box.png" width="30%" />
        </S.ImageWrapper>
        <S.Text fontSize="1.5rem">원하는 공약이 없어요.</S.Text>
      </S.ResultWrapper>
    );
  }

  const renderingParties = parties.map(({ name, promises, color }) => (
    <>
      <S.PartyWrapper>
        <S.Text fontSize="1.3rem">{name}</S.Text>
        <S.Line width={`${(promises.length / total) * 70}%`} color={color} height={"30px"} />
        <S.Text fontSize="1rem">{`${Math.round((promises.length / total) * 1000) / 10}% (${
          promises.length
        }표)`}</S.Text>
      </S.PartyWrapper>
      <PartyPromiseList promises={promises} />
    </>
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
      <CircleGraph nums={nums} items={items} total={total} width={250} padding={10} />
      <S.Line />
      {renderingParties}
    </S.ResultWrapper>
  );
};

export default Result;
