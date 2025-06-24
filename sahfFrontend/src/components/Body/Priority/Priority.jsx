import React from "react";
import styles from "./Priority.module.css";
import PriorityVideo1 from "../../../assets/Body/priority1.mp4"; 
import PriorityVideo2 from "../../../assets/Body/priority2.mp4"; 
import PriorityVideo3 from "../../../assets/Body/priority3.mp4"; 
import PriorityVideo4 from "../../../assets/Body/priority4.mp4"; 
import PriorityVideo5 from "../../../assets/Body/priority5.mp4"; 
import PriorityVideo6 from "../../../assets/Body/priority6.mp4"; 
import PriorityVideo7 from "../../../assets/Body/priority7.mp4"; 
import PriorityVideo8 from "../../../assets/Body/priority8.mp4"; 

const cardData = [
  { id: 1, title: "Awareness", video: PriorityVideo1 },
  { id: 2, title: "Accessibility", video: PriorityVideo2 },
  { id: 3, title: "Affordability", video: PriorityVideo3 },
  { id: 4, title: "Humanpower", video: PriorityVideo4 },
  { id: 5, title: "Early Childhood Care & Education", video: PriorityVideo5 },
  { id: 6, title: "Curriculum Reform & Innovation", video: PriorityVideo6 },
  { id: 7, title: "Enhancing Teacher Quality", video: PriorityVideo7 },
  { id: 8, title: "Equity & Inclusion", video: PriorityVideo8},
];

const Priority = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Priority</h1>

      {/* 🔹 Card Grid */}
      <div className={styles.grid_container}>
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`card ${styles.card}`}
            style={{ width: "18rem" }}
          >
            <video
              className="card-img-top"
              src={card.video}
              autoPlay
              loop
              muted
              playsInline // Improves performance on mobile devices
            />
            <div className="card-body">
              <h5 className="card-text">"{card.title}"</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Priority;
