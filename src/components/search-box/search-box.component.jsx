import React, { Component } from "react";
import "./search-box.styles.css";

export default class SearchBox extends Component {
  render() {
    const { className, onChangeHandler, placeHolder } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeHolder}
        onChange={onChangeHandler}
      ></input>
    );
  }
}
