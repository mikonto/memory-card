import styles from "./Card.module.css"; // Import the CSS Module
import PropTypes from "prop-types"; // Import PropTypes

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img
        src={props.cardsData.url}
        alt="Random Gif"
        onClick={() => props.handleClick(props.cardsData.id)}
      />
    </div>
  );
};

// Define the prop types
Card.propTypes = {
  cardsData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
};

export default Card;
