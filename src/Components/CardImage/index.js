import { CARD_IMG, PLAYER, SIDEWAYS_DOUBLE_CARD } from '../../Constants/index';

import React from "react";
import { getImage } from "../../Helpers/index";

const CardImage = ({ who, cards, isDealersTurn, didDouble }) => {
  return cards?.map((card) => {
    const image = getImage(card, isDealersTurn);
    const isSecondCard = cards.indexOf(card) === 2;
    const isPlayer = who === PLAYER;
    
    const getCssClass =
      (didDouble && isSecondCard && isPlayer && SIDEWAYS_DOUBLE_CARD) ||
      CARD_IMG;

    return <img className={getCssClass} alt={card} src={image} key={`image-name-${card}`}/>;
  });
};

export default CardImage;
