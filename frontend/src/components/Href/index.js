import React from "react";
import { Link } from "react-router-dom";

const Href = ({ to, title }) => {
  return (
    <Link to={to} style={{ color: "black", fontStyle: "italic" }}>
      {title}
    </Link>
  );
};

export default Href;
