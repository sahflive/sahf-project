import styles from './write_your_child.module.css'

const write_your_child = () => {
  return (
   <div className={styles.wrapper}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Write Now!</h1>
        <p className={styles.email}>Write now at <a href="mailto:sahfofficial.edu@gmail.com">sahfofficial.edu@gmail.com</a></p>
      </div>

      <div className={styles.contentSection}>
        <ul>
          <li>Regular correspondence cultivates a personal relationship between the sponsor and child. This exchange allows for the sharing of life experiences, interests, and aspirations, fostering a deeper understanding and connection.</li>
          <li>Letters offer a valuable source of encouragement and support for the sponsored child. Words of affirmation and belief in their potential can significantly boost their self-esteem and motivate them to strive for their goals.</li>
          <li>Receiving letters from their sponsors provides a sense of hope and belonging for children facing adversity. Knowing that someone cares about them and is invested in their well-being can significantly impact their resilience and overall outlook.</li>
          <li>Letter writing provides a unique opportunity for cultural exchange. Sharing stories, traditions, and perspectives from different parts of the world broadens horizons and promotes cross-cultural understanding.</li>
        </ul>

        <p className={styles.bottomText}>
          Write now at <a href="mailto:sahfofficial.edu@gmail.com" className={styles.bottomEmail}>sahfofficial.edu@gmail.com</a>
        </p>

        <a href="mailto:sahfofficial.edu@gmail.com" className={styles.button}>Write now</a>
      </div>
    </div>
  )
}

export default write_your_child
