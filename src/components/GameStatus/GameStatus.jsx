import styles from "./GameStatus.module.css";
import PropTypes from "prop-types"; // Import PropTypes

const GameOver = (props) => {
  return (
    <div className={styles.gameOver}>
      <h2>{props.gameStatus}</h2>
    </div>
  );
};

GameOver.propTypes = {
  gameStatus: PropTypes.string.isRequired,
};

export default GameOver;
