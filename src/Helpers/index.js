// import CardBack from "../images/card-back.png";
import { IMAGES } from '../Constants/index'

export const getImage = (card) => {
    const currentCard = IMAGES.find(image => image.name === card).card;
    return currentCard;
};

export const getResultMessage = (winner, isBlackjack, didDouble, previousBet, isDealerBusted, isPlayerBusted) => {
    //TODO: clean up this if statements
    return winner === "player" && isBlackjack
    ? `Blackjack! Player wins ${
        previousBet + previousBet * 1.5
      }`
    : winner === "player" && didDouble
    ? `Player doubles and wins ${previousBet * 4}`
    : winner === "player" && isDealerBusted
    ? `Dealer busted! Player wins ${previousBet * 2}`
    : winner === "dealer" && didDouble
    ? `Player doubled and lost ${previousBet * 2}`
    : winner === "dealer" && isBlackjack
    ? `Dealer Blackjack. Player lost ${previousBet}`
    : winner === "dealer" &&
      isPlayerBusted &&
      didDouble
    ? `Player busted on double. Lost ${previousBet * 2}`
    : winner === "dealer" && isPlayerBusted
    ? `Player busted. Lost ${previousBet}`
    : winner === "dealer"
    ? `Player lost ${previousBet}`
    : winner === "player"
    ? `Player wins ${previousBet * 2}`
    : winner === "push" && didDouble
    ? `Pushed back ${previousBet * 2}`
    : winner === "push"
    ? `Pushed back ${previousBet}`
    : null;
};

