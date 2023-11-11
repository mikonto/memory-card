import styles from "./Score.module.css";
import PropTypes from "prop-types";

const Score = (props) => {
  return (
    <div className={styles.score}>
      <div>Score {props.score}</div>
      <div>Top Score {props.topScore}</div>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired,
};

export default Score;
