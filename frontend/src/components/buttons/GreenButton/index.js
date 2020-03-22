import React from "react";

import Button from "../Button";

const GreenButton = ({ text, width, height, onClick, fontSize }) => {
  return (
    <Button
      text={text}
      color="#1abc9c"
      activeColor="#16a085"
      width={width}
      height={height}
      fontColor="white"
      fontSize={fontSize}
      onClick={onClick}
    />
  );
};

export default GreenButton;
