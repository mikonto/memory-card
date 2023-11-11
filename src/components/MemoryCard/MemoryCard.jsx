import styles from "./MemoryCard.module.css"; // Import the CSS Module
import Header from "../Header/Header";
import CardGrid from "../CardGrid/CardGrid";
import GameStatus from "../GameStatus/GameStatus";

import { useState, useEffect } from "react";
import fetchRandomGif from "../../utils/fetchRandomGif";
import shuffleArray from "../../utils/suffleArray";
import { v4 as uuidv4 } from "uuid";

const MemoryCard = () => {
  const [cardsData, setCardsData] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  const [topScore, setTopScore] = useState(0);

  const resetCardsData = (message) => {
    setGameStatus(message); // Set loading message

    const promises = Array.from({ length: 12 }, fetchRandomGif);
    Promise.all(promises)
      .then((urls) => {
        const newCards = urls.map((url) => ({
          id: uuidv4(),
          url: url,
          clicked: false,
        }));
        setCardsData(newCards);
        setGameStatus(""); // Clear game status message
      })
      .catch((error) => {
        console.error("Error fetching GIFs:", error);
        setGameStatus("Failed to start a new game. Try again."); // Error message
      });
  };

  useEffect(() => {
    resetCardsData("Starting a new game...");
  }, []);

  useEffect(() => {
    // Add top score
    if (score > topScore) {
      setTopScore(score);
    }
  }, [score, topScore]);

  const handleClick = (id) => {
    const cardClicked = cardsData.find((card) => card.id === id);

    if (cardClicked && cardClicked.clicked) {
      // setGameStatus("Game over!"); // Game over message
      resetCardsData("Game over! Starting a new game...");
      setScore(0);
    } else {
      // Update the clicked state of the card and shuffle
      const updatedCards = cardsData.map((card) =>
        card.id === id ? { ...card, clicked: true } : card
      );
      setCardsData(shuffleArray(updatedCards));
      setScore(score + 1); // Increment the score
    }
  };

  return (
    <div className={styles.memoryCard}>
      <Header score={score} topScore={topScore} />
      {gameStatus ? <GameStatus gameStatus={gameStatus} /> : null}
      {!gameStatus ? (
        <CardGrid
          cardsData={cardsData}
          handleClick={handleClick}
          gameStatus={gameStatus}
        />
      ) : null}
    </div>
  );
};

export default MemoryCard;
