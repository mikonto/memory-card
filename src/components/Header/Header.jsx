import styles from "./Header.module.css"; // Import the CSS Module
import Score from "../Score/Score";
import PropTypes from "prop-types"; // Import PropTypes

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>Memory game</h1>
        <p className={styles.paragraph}>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
      <div>
        <Score score={props.score} topScore={props.topScore} />
      </div>
    </div>
  );
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired,
};

export default Header;
