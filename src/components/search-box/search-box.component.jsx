import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeHolder, handelChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={handelChange}
    ></input>
  );
};
