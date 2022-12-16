import "./App.css";

import React, { useCallback, useEffect, useState } from "react";
import { concat, shuffle } from "lodash";

// import BettingButton from "./Components/BettingButton/index";
import { CHIPS } from "./Constants/index";
import ChipImage from "./Components/ChipImage/index";
import { DECK_OF_CARDS } from "./Constants/index";
import Game from "./Components/Game/index";

function App() {
  const twoDecks = [...DECK_OF_CARDS, ...DECK_OF_CARDS];

  const [randomizedDecks, setRandomizedDecks] = useState([]);
  const [chipCount, setChipCount] = useState(1000);
  const [betAmount, setBetAmount] = useState(0);
  const [lockedBet, setLockedBet] = useState(0);
  const [previousBet, setPreviousBet] = useState(0);
  const [dealersCards, setDealersCards] = useState([]);
  const [dealerCount, setDealerCount] = useState(0);
  const [playersCards, setPlayersCards] = useState([]);
  const [playerCount, setPlayerCount] = useState(0);
  const [isBlackjack, setIsBlackJack] = useState(false);
  const [isPlayerBusted, setIsPlayerBusted] = useState(false);
  const [didDouble, setDidDouble] = useState(false);
  const [isDealersTurn, setIsDealersTurn] = useState(false);
  const [isDealerBusted, setIsDealerBusted] = useState(false);
  const [isHandComplete, setIsHandComplete] = useState(true);
  const [winner, setWinner] = useState("");

  const shuffleDeck = () => {
    const newShuffle = shuffle(twoDecks);
    const newFirstFour = newShuffle.splice(0, 4);
    setRandomizedDecks(newShuffle);
    setPlayersCards([newFirstFour[0], newFirstFour[2]]);
    setDealersCards([newFirstFour[1], newFirstFour[3]]);
  };

  const startHand = () => {
    if (isHandComplete && lockedBet > 0) {
      shuffleDeck();
      setIsHandComplete(false);
      setWinner("");
      setIsPlayerBusted(false);
      setIsDealerBusted(false);
      setIsDealersTurn(false);
      setPlayerCount(0);
      setDealerCount(null);
      setIsBlackJack(false);
      setPreviousBet(lockedBet);
      setChipCount(chipCount - lockedBet);
      setLockedBet(0);
      setDidDouble(false);
    }
  };

  useEffect(() => {
    previousBet > 0 && setLockedBet(0);
  }, [previousBet]);

  const resetBets = () => {
    window.location.reload(false);
  };

  const restartFresh = () => {
    if (chipCount < 5) {
      setChipCount(1000);
      setBetAmount(0);
    }
  };

  const handScore = (who, hand) => {
    let copyOfHand = [...hand];
    let sortedHand = copyOfHand.sort();
    let tenRegex = /^[JQK]|^10/;
    let numRegex = /^[2-9]/;
    let aceRegex = /^A/;
    let acesLast = [];
    const isPlayer = who === "player";
    const isDealer = who === "dealer";
    // const acesLast2 = sortedHand.map((card) => ((aceRegex.test(card) && card) || concat(card)));

    sortedHand.forEach((card) => {
      if (aceRegex.test(card)) {
        acesLast.push(card);
      } else {
        acesLast.unshift(card);
      }
    });

    let handCount = 0;

    acesLast.forEach((card) => {
      const isAce = aceRegex.test(card);
      tenRegex.test(card) && (handCount += 10);
      numRegex.test(card) && (handCount += parseInt(card.match(numRegex)[0]));
      (isAce && handCount <= 10 && (handCount += 11)) ||
        (handCount + 11 > 21 && (handCount += 1));
    });

    isPlayer && setPlayerCount(handCount);
    isDealer && setDealerCount(handCount);
    return handCount;
  };

  const handleHit = () => {
    if (
      playerCount < 21 &&
      !isDealersTurn &&
      winner !== "dealer" &&
      !isBlackjack
    ) {
      setTimeout(() => {
        let currentDeck = [...randomizedDecks];
        let nextCard = currentDeck.splice(0, 1)[0];
        setPlayersCards([...playersCards, nextCard]);
        setRandomizedDecks(currentDeck);
      }, 300);
    }
  };

  const handleStay = () => {
    !isPlayerBusted && !isDealersTurn && setIsDealersTurn(true);
  };

  const handleBet = (bet) => {
    betAmount + bet <= chipCount &&
      isHandComplete &&
      setBetAmount(betAmount + bet);
  };

  const handleLockedBet = () => {
    betAmount > 0 && setLockedBet(betAmount);
  };

  const keepSameBet = () => {
    if (isHandComplete && chipCount >= previousBet && previousBet > 0) {
      shuffleDeck();
      setIsHandComplete(false);
      setWinner("");
      setIsPlayerBusted(false);
      setIsDealerBusted(false);
      setIsDealersTurn(false);
      setPlayerCount(0);
      setDealerCount(null);
      setLockedBet(0);
      setIsBlackJack(false);
      setChipCount(chipCount - previousBet);
      setDidDouble(false);
    }
  };

  const handleDouble = () => {
    if (
      !isDealersTurn &&
      playersCards.length === 2 &&
      chipCount >= previousBet
    ) {
      handleHit();
      setTimeout(() => {
        setIsDealersTurn(true);
      }, 1500);
      setDidDouble(true);
      setChipCount(chipCount - previousBet);
    }
  };

  const clearLockedBet = () => {
    setLockedBet(0);
  };

  const dealerHitAgain = () => {
    let tenRegex = /^[JQK]|^10/;
    let numRegex = /^[2-9]/;
    let aceRegex = /^A/;

    let nextCardValue;
    let currentDeck = randomizedDecks;
    let nextCard = currentDeck.splice(0, 1)[0];

    const isTen = tenRegex.test(nextCard);
    const isNum = numRegex.test(nextCard);
    const isAce = aceRegex.test(nextCard);

    const dealerCountSmallerThen10 = dealerCount <= 10 && isAce;
    const dealerCountBiggerThen10 = dealerCount + 11 > 21 && isAce;

    isTen && (nextCardValue = 10);
    isNum && (nextCardValue = parseInt(nextCard.match(numRegex)[0]));
    dealerCountSmallerThen10 && (nextCardValue = 11);
    dealerCountBiggerThen10 && (nextCardValue = 1);

    setTimeout(() => {
      setDealersCards([...dealersCards, nextCard]);
      setRandomizedDecks(currentDeck);
      setDealerCount(dealerCount + parseInt(nextCardValue));
    }, 500);
  };

  useEffect(() => {
    handScore("player", playersCards);
  }, [playersCards]);

  useEffect(() => {
    handScore("dealer", dealersCards);
  }, [dealersCards]);

  // Check for blackjack in the beginning
  useEffect(() => {
    if (playersCards.length === 2 && playerCount === 21 && dealerCount !== 21) {
      setIsBlackJack(true);
      setWinner("player");
      setIsHandComplete("true");
      setIsDealersTurn("true");
    }

    if (dealersCards.length === 2 && dealerCount === 21 && playerCount !== 21) {
      setIsBlackJack(true);
      setWinner("dealer");
      setIsHandComplete("true");
      setIsDealersTurn("true");
    }

    if (
      playersCards.length === 2 &&
      dealersCards.length === 2 &&
      dealerCount === 21 &&
      playerCount === 21
    ) {
      setWinner("push");
      setIsHandComplete("true");
      setIsDealersTurn("true");
    }
  });

  // Player's turn
  useEffect(() => {
    if (playerCount > 21) {
      setWinner("dealer");
      setIsPlayerBusted(true);
      setIsHandComplete(true);
      setIsDealersTurn(true);
    }
  }, [playerCount]);

  //Dealer's turn
  useEffect(() => {
    if (
      isDealersTurn &&
      dealerCount < 17 &&
      !isPlayerBusted &&
      winner !== "player"
    ) {
      setTimeout(() => {
        dealerHitAgain();
      }, 500);
    }
    if (
      isDealersTurn &&
      dealerCount >= 17 &&
      dealerCount <= 21 &&
      !isPlayerBusted
    ) {
      if (dealerCount > playerCount) {
        setWinner("dealer");
        setIsHandComplete(true);
      }
      if (dealerCount < playerCount) {
        setWinner("player");
        setIsHandComplete(true);
      }
      if (dealerCount === playerCount) {
        setWinner("push");
        setIsHandComplete(true);
      }
    }
  }, [isDealersTurn]);

  useEffect(() => {
    if (dealerCount > 21) {
      setIsDealerBusted(true);
      setWinner("player");
      setIsHandComplete(true);
    }

    if (dealerCount >= 17 && dealerCount < 22 && isDealersTurn) {
      if (dealerCount > playerCount) {
        setWinner("dealer");
        setIsHandComplete(true);
      }
      if (dealerCount < playerCount && !isPlayerBusted) {
        setWinner("player");
        setIsHandComplete(true);
      }
      if (dealerCount === playerCount && !isPlayerBusted) {
        setWinner("push");
        setIsHandComplete(true);
      }
    }

    if (dealerCount < 17 && isDealersTurn && !isPlayerBusted) {
      setTimeout(() => {
        dealerHitAgain();
      }, 500);
    }
  }, [dealerCount]);

  // Payout / take losses / push
  useEffect(() => {
    const playerWins = winner === "player";
    const playerWinsWithBlackJack = playerWins && isBlackjack;
    const playerWinsWithOutBlackJack = playerWins && !isBlackjack;

    const dealerWins = winner === "dealer";
    const pushWins = winner === "push";
    const standardChipAmount = chipCount + previousBet;

    dealerWins && setBetAmount(0);

    const correctChipCount =
      (playerWinsWithOutBlackJack &&
        ((didDouble && standardChipAmount * 4) || standardChipAmount * 2)) ||
      (playerWinsWithBlackJack && standardChipAmount * 2.5) ||
      (pushWins &&
        ((didDouble && standardChipAmount * 2) || standardChipAmount));


    playerWins && setChipCount(correctChipCount);
  }, [winner]);

  useEffect(() => {
    if (lockedBet > 0) {
      setBetAmount(0);
    }
  }, [lockedBet]);

  useEffect(() => {
    if (isPlayerBusted) {
    }
  }, [isPlayerBusted]);

  return (
    <div className="App">
      <div className="app">
        <header className="app-header">
        <p className="title">Lucky
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1151732/poker_logo2.png" alt="Poker Logo" width="60px" height="60px"></img>
                Lucky
          </p>
          <div className="pending-bet-div">
            <span className="pending-bet">
              Next Bet:{" "}
              <div
                className="chip-number"
                id={
                  betAmount === 0 && previousBet === 0
                    ? "attention-green"
                    : "normal-text"
                }
              >
                {betAmount}
              </div>
            </span>
            <button
              className="reset-button"
              id={betAmount > 0 ? "ready-to-start" : "not-ready"}
              onClick={resetBets}
            >
              Reset
            </button>
          </div>
          <span className="chip-count">
            Chip Count:{" "}
            <div
              className="chip-number"
              id={chipCount === 0 ? "attention-red" : "normal-text"}
            >
              {chipCount}
            </div>
          </span>
        </header>
        <Game
          randomizedDecks={randomizedDecks}
          playersCards={playersCards}
          dealersCards={dealersCards}
          chipCount={chipCount}
          setChipCount={setChipCount}
          betAmount={betAmount}
          setBetAmount={setBetAmount}
          playerCount={playerCount}
          setPlayerCount={setPlayerCount}
          dealerCount={dealerCount}
          setDealerCount={setDealerCount}
          handleHit={handleHit}
          handleStay={handleStay}
          handleDouble={handleDouble}
          // handleSplit={handleSplit}
          lockedBet={lockedBet}
          handleLockedBet={handleLockedBet}
          isHandComplete={isHandComplete}
          isDealersTurn={isDealersTurn}
          isPlayerBusted={isPlayerBusted}
          isDealerBusted={isDealerBusted}
          didDouble={didDouble}
          startHand={startHand}
          handleBet={handleBet}
          previousBet={previousBet}
          winner={winner}
          isBlackjack={isBlackjack}
          clearLockedBet={clearLockedBet}
        />
        <div className="game-result-div">
          <section className="betting-options">
            {isHandComplete && (
              <div className="inner-betting-options">
                {CHIPS.map((chip) => (
                  <ChipImage
                    chip={chip}
                    chipCount={chipCount}
                    onClick={() => handleBet(chip.chipAmount)}
                    key={`chip-${chip.name}`}
                  />
                ))}
              </div>
            )}
          </section>
          <button
            className="betting-option"
            id={betAmount > 0 ? "ready-to-start" : "not-ready"}
            onClick={handleLockedBet}
          >
            Place Bet
          </button>
          {isHandComplete && (
            <button
              className="betting-option"
              id={lockedBet > 0 ? "ready-to-start" : "not-ready"}
              onClick={startHand}
            >
              Start Hand
            </button>
          )}
          {chipCount >= previousBet && isHandComplete && (
            <button
              className="betting-option"
              onClick={keepSameBet}
              id={
                previousBet <= chipCount && previousBet > 0
                  ? "ready-to-start"
                  : "not-ready"
              }
            >
              Same Bet
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
