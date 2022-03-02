import React, { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("render from CardList Component");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster}></Card>
        ))}
      </div>
    );
  }
}

export default CardList;
