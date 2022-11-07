import "./styles.css";

import BlankChip from "../../Images/blank-chip.png";
import CardImage from "../CardImage";
import React from "react";

export default function Game({
  playersCards,
  dealersCards,
  chipCount,
  playerCount,
  dealerCount,
  handleHit,
  handleStay,
  handleDouble,
  lockedBet,
  isHandComplete,
  isDealersTurn,
  isPlayerBusted,
  isDealerBusted,
  didDouble,
  previousBet,
  winner,
  isBlackjack,
  clearLockedBet,
}) {
  return (
    <div className="game-div">
      <div className="dealers-cards-div">
        <h1 className="count">
          {isDealersTurn ? dealerCount : null}
        </h1>
          <CardImage who={"dealer"} cards={dealersCards} isDealersTurn={isDealersTurn} didDouble={didDouble}/>
      </div>
      <div className="chip-or-message">
        {lockedBet > 0 || !isHandComplete ? (
          <div className="empty-chip-container">
            <div className="locked-bet-amount">
              {isHandComplete ? lockedBet : previousBet}
            </div>
            <img
              className="locked-bet-img"
              onClick={clearLockedBet}
              src={BlankChip}
              alt="nix"
            ></img>
          </div>
        ) : null}
        <h1 className="result-message">
          {winner === "player" && isBlackjack
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
            : null}
        </h1>
      </div>
      <div className="players-cards-div">
      <CardImage who={"player"} cards={playersCards} isDealersTurn={isDealersTurn} didDouble={didDouble}/>

        <h1 className="count">
          {playerCount > 0 ? playerCount : null}
        </h1>
      </div>
      <section className="gameplay-options">
        {!isHandComplete ? (
          <>
            <button
              className="betting-option"
              id={
                !isDealersTurn && playerCount < 21
                  ? "ready-to-start"
                  : "not-ready"
              }
              onClick={handleHit}
            >
              Hit
            </button>
            <button
              className="betting-option"
              id={
                !isDealersTurn &&
                playerCount <= 21 &&
                !didDouble
                  ? "ready-to-start"
                  : "not-ready"
              }
              onClick={handleStay}
            >
              Stay
            </button>
            <button
              className="betting-option"
              id={
                !isDealersTurn &&
                playersCards.length === 2 &&
                chipCount >= previousBet
                  ? "ready-to-start"
                  : "not-ready"
              }
              onClick={handleDouble}
            >
              Double
            </button>
            {/* <button onClick={handleSplit}>Split</button> */}
          </>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
