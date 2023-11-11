import styles from "./MemoryCard.module.css"; // Import the CSS Module
import Header from "../Header/Header";
import CardGrid from "../CardGrid/CardGrid";

const MemoryCard = () => {
  return (
    <div className={styles.memoryCard}>
      <Header />
      <CardGrid />
    </div>
  );
};

export default MemoryCard;
