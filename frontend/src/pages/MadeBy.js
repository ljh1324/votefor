import React from "react";

import * as GS from "../components/GlobalStyle";
import Maker from "../components/Maker";
import TitleWithLogo from "../components/TitleWithLogo";
import { BackButton } from "../components/buttons";

const makersList = [
  {
    title: "아이콘",
    makers: [
      {
        to: "https://www.flaticon.com/authors/freepik",
        title: "Freepik",
        isLink: true
      }
    ]
  },
  {
    title: "폰트",
    makers: [
      {
        to: "https://fonts.google.com/specimen/Noto+Sans+KR?selection.family=Noto+Sans+KR",
        title: "Noto Sans KR",
        isLink: true
      }
    ]
  },
  {
    title: "정당정책",
    makers: [
      {
        to: "http://policy.nec.go.kr/",
        title: "중앙선거관리위원회",
        isLink: true
      }
    ]
  },
  {
    title: "개발 및 공약 수집",
    makers: [
      {
        to: "https://github.com/ljh1324",
        title: "이정환 <ljhw3377@gmail.com>",
        isLink: true
      },
      {
        to: "https://github.com/Gobans",
        title: "이명환 <audghks4452@gmail.com>",
        isLink: true
      },
      {
        to: "https://github.com/psyoongsc",
        title: "박성용 <sh__y_@naver.com>",
        isLink: true
      }
    ]
  },
  {
    title: "문의",
    makers: [
      {
        to: "",
        title: "ljhw3377@gmail.com",
        isLink: false
      }
    ]
  }
];

const MadeBy = () => {
  return (
    <GS.FlexWrap>
      <TitleWithLogo text="만든이" />
      <GS.FlexColorContainer color="#f5f6fa">
        {makersList.map(({ title, makers }) => (
          <Maker title={title} makers={makers} />
        ))}
      </GS.FlexColorContainer>
      <BackButton width="30%" height="70px" />
    </GS.FlexWrap>
  );
};

export default MadeBy;
