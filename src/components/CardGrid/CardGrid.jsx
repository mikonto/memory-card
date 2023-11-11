import styles from "./CardGrid.module.css";
import Card from "../Card/Card";
console.log(styles);

const CardGrid = () => {
  return (
    <div className={styles.cardGrid}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardGrid;
