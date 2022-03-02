import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: "",
    };
    console.log("constructor");
    // HACK
    // we use arrow function instead of this
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    this.setState(() => {
      return { searchFiled: e.target.value.toLowerCase() };
    });
  };

  render() {
    console.log("render");

    const { monsters, searchFiled } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFiled)
    );

    return (
      <div className="App">
        <SearchBox
          placeHolder="Search Monsters"
          handelChange={onSearchChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
