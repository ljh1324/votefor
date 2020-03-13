import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

const Category = ({ name, voted }) => {
  return (
    <Link to={`/voting/${name}`} style={{ textDecoration: "none", width: "100%", margin: "20px" }}>
      <S.ItemWrapper voted={voted}>
        <S.Text>{name}</S.Text>
      </S.ItemWrapper>
    </Link>
  );
};

export default Category;
