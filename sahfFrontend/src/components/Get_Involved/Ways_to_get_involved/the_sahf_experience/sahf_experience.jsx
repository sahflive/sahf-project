import styles from "./sahf_experience.module.css";

const SahfExperience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.meeting}>
        <h1>Trip & Visit</h1>
        <div className={styles.meeting2}>
          <h2>Meeting your sponsored child at SAHF education centre</h2>
          <p>
            It transforms the relationship from abstract to personal, fostering
            a stronger emotional bond and a greater sense of purpose in the
            sponsorship. Seeing firsthand the positive changes your support has
            made in the child's life can be incredibly motivating and
            reaffirming. It offers a unique opportunity to learn about the
            child's culture, community, and daily life, broadening your own
            perspective.
          </p>
          <br />
          <p>
            Meeting the child can serve as a powerful reminder of the importance
            of your ongoing support and inspire you to continue making a
            difference. Knowing they are valued and cared for by someone far
            away can boost their self-esteem and sense of worth.
          </p>
          <br />
          <p>
            Meeting their sponsor can provide hope for the future and inspire
            them to reach their full potential. It can foster a unique
            cross-cultural friendship, offering the child a new perspective and
            expanding their horizons.
          </p>
          <br />
          <p>
            The child's safety and well-being should always be the top priority.
            It's crucial to approach the meeting with cultural sensitivity and
            respect for the child's customs and traditions.
          </p>
        </div>
       <div className={styles.Invitation}>
  <h2>Invitation to Experience the Impact of SAHF Education Centre</h2>
  <p>Dear Community Member,</p>

  <p>
    We are writing to invite you to spend a day with the children at the SAHF
    Education Centre. I believe this will be a deeply rewarding experience for
    you and a valuable opportunity to witness firsthand the positive impact of
    our organization’s work.
  </p>

  <p className={styles.highlight}>
    During your visit, you will have the chance to–
  </p>

  <ul>
    <li>
      <strong>Observe the children's learning environment:</strong> See how our
      dedicated teachers provide a nurturing and stimulating learning
      experience.
    </li>
    <li>
      <strong>Interact with the children:</strong> Participate in classroom
      activities, play games, and engage in conversations with the students.
    </li>
    <li>
      <strong>
        Learn about the challenges and successes of the center:
      </strong>{" "}
      Gain a deeper understanding of the needs of the children we serve and the
      impact of our programs.
    </li>
  </ul>

  <p>
    We are confident that this experience will leave a lasting impression on
    you. Your presence will not only provide valuable support to the children
    but also inspire others in our community to get involved in our mission.
  </p>

  <p>Thank you for your time and consideration.</p>

  <p>Sincerely,</p>

  <p>
    <strong>Mr. Ramesh Kumar</strong>
    <br />
    <em>Education program manager</em>
    <br />
    SAHF Education Centre
  </p>

  <div className={styles.planBtn}>
    <a href="mailto:sahfofficial.edu@gmail.com">Plan Now</a>
  </div>
</div>

      </div>
    </div>
  );
};

export default SahfExperience;
