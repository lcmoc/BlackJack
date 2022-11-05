import CardBack from "../images/card-back.png";
import { IMAGES } from '../Constants/index'

export const getImage = (card, isDealersTurn) => {
    const currentCard = IMAGES.includes(card) ? IMAGES[card] : '';
    
    return !isDealersTurn ? CardBack : currentCard;
};
