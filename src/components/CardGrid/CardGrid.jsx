import styles from "./CardGrid.module.css";
import Card from "../Card/Card";
import PropTypes from "prop-types"; // Import PropTypes

const CardGrid = (props) => {
  return (
    <div className={styles.cardGrid}>
      {props.cardsData.map((card) => (
        <Card key={card.id} cardsData={card} handleClick={props.handleClick} />
      ))}
    </div>
  );
};

CardGrid.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      clicked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CardGrid;
