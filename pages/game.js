import { useEffect, useState } from "react";
import SingleCard from "../components/game/single-card";
import Head from "next/head";

const cardImages = [
  { src: "/images/game/A1.png", matched: false },
  { src: "/images/game/A2.png", matched: false },
  { src: "/images/game/A3.png", matched: false },
  { src: "/images/game/A4.png", matched: false },
  { src: "/images/game/A5.png", matched: false },
  { src: "/images/game/A6.png", matched: false }
];

const Game = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCrads = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() * 1000 }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCrads);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = card => {
    // if we have value in choiceOne - we set choice Two
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choice and increase turns
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  // start the game automatically
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <>
      <Head>
        <title>
          Game Guess the Match - Scroll | Fire Pit | Balcony | Stairs
        </title>
        <meta
          name="description"
          content="Simple fun game - Guess matching card - Vine Rack, Fire Pit, Balcony, Scroll, Helical and Corner stairs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="game">
        <p className="w3-center">
          <button onClick={shuffleCards} className="w3-btn w3-green">
            New Game
          </button>
        </p>
        <div className="wrapper">
          {cards.map(card => (
            <div key={card.id}>
              <SingleCard
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            </div>
          ))}
        </div>
        <p className="w3-center turns">Turns: {turns}</p>
      </div>
    </>
  );
};

export default Game;
