import { useState, useEffect } from "react";

import styles from "./Card.module.css"; // Import the CSS Module
import fetchRandomGif from "../../utils/fetchRandomGif";

const Card = () => {
  const [gifUrl, setGifUrl] = useState("");

  useEffect(() => {
    fetchRandomGif().then((url) => setGifUrl(url));
  }, []);

  return (
    <div className={styles.card}>
      {gifUrl && <img src={gifUrl} alt="Random Gif" />}
    </div>
  );
};

export default Card;
