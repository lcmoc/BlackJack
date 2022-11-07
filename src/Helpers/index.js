import CardBack from "../Images/card-back.png";
import { IMAGES } from '../Constants/index'

export const getImage = (card, isDealersTurn) => {
    console.log('isDealersTurn', isDealersTurn);
    const currentCard = IMAGES.find(image => image.name === card).card;
    //TODO: add logic to show card back for dealers first card
    
    return currentCard;
};
