import { CARD_BACK_ALT, DEALER } from "../../Constants/index";
import {
  CARD_IMG,
  IMAGES,
  PLAYER,
  SIDEWAYS_DOUBLE_CARD,
} from "../../Constants/index";

import CardBack from "../../images/card-back.png";
import React from "react";

const CardImage = ({ who, cards, isDealersTurn, didDouble }) => {
  return cards?.map((card) => {
    const currentCardImage = IMAGES.find((image) => image.name === card).card;
    const isSecondCard = cards.indexOf(card) === 2;
    const isPlayer = who === PLAYER;
    const isCardBackImage =
      who === DEALER && parseInt(cards.indexOf(card)) === 1 && !isDealersTurn;
    const CorrectImage = isCardBackImage ? CardBack : currentCardImage;
    const getCorrectAlt = isCardBackImage ? CARD_BACK_ALT : card;

    const getCssClass =
      (didDouble && isSecondCard && isPlayer && SIDEWAYS_DOUBLE_CARD) ||
      CARD_IMG;

    return (
      <img
        className={getCssClass}
        alt={getCorrectAlt}
        src={CorrectImage}
        key={`image-name-${card}`}
      />
    );
  });
};

export default CardImage;
