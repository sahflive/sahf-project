import React, { useState } from "react";
import styles from "./Transformlives.module.css";
import Card_img1 from "../../../assets/card1.jpg";
import Card_img2 from "../../../assets/card2.jpg";
import Card_img3 from "../../../assets/card3.jpg";

const Transformlives = () => {
  // 🔹 Step 1: Store data using useState
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Sponsor a Child",
      text: "Through child sponsorship you can help a child in need gain the means to survive.",
      img: Card_img1,
    },
    {
      id: 2,
      title: "Donate to a Cause",
      text: "Through child sponsorship you can help a child in need gain the means to survive.",
      img: Card_img2,
    },
    {
      id: 3,
      title: "Give a Gift",
      text: "The value of a contribution doesn't depend on how big it is but on the kindness and care behind it",
      img: Card_img3,
    },
  ]);

  return (
    <div className={styles.card_section}>
      <h1 className={styles.container}>Transform Lives</h1>
      <div className="d-flex justify-content-around flex-wrap">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${styles.card_section}`}
            style={{ width: "20rem", margin: "10px" }}
          >
            <img src={card.img} className="card-img-top" alt={card.title} />
            <div className={`card-body ${styles.card_body}`}>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a href="#" className="btn btn-primary">
                Support Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transformlives;
