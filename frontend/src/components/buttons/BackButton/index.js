import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../Button";

const BackButton = ({ width, height, fontSize }) => {
  const history = useHistory();

  const handlePreviousBtnClick = () => {
    history.goBack();
  };

  return (
    <Button
      text="이전"
      color="white"
      activeColor="#f1f2f6"
      width={width}
      height={height}
      fontColor="black"
      fontSize={fontSize}
      border="2px solid black"
      onClick={handlePreviousBtnClick}
    />
  );
};

export default BackButton;
