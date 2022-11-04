import CardBack from "../../images/card-back.png";
import React from "react";
import { getImage } from '../../Helpers/index'

const Image = ({ who, cards, isDealersTurn, didDouble }) => {
  cards?.map((card) => {
    const image = getImage(card);

    if (who === "dealer" && parseInt(cards.indexOf(card)) === 1) {
      return (
        <img
          className="card-img"
          alt={card}
          src={isDealersTurn ? image : CardBack}
        ></img>
      );
    }
    return (
      <img
        className={
          didDouble && cards.indexOf(card) === 2 && who === "player"
            ? "sideways-double-card"
            : "card-img"
        }
        alt={card}
        src={image}
      ></img>
    );
  });
};

export default Image;
