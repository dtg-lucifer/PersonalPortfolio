import styles from "./About.module.scss";
import AnimatedLetter from "../../components/AnimatedLetter/index"

const AboutLayout = () => {
  return (
    <div className={`${styles.container} ${styles.aboutPage}`}>
      <h1 className={styles.heading}>
        <AnimatedLetter strArr={[
          "A",
          "b",
          "o",
          "u",
          "t"
        ]} idx={20} />
      </h1>
      <p className={styles.aboutQuote}>
        I'm very ambitious Full Stack Web developer looking for a role in established IT company withthe opputunity to work woth the latest technologies on challenging and diverse projects
      </p>
      <p className={styles.aboutQuote}>
        I'm quietly confident, naturally curious, and perpetually working on improving my chops one design and one dsa problem at a time.
      </p>
      <p className={styles.aboutQuote}>
        If I need to define myself in one sentence htat would be a young person, student, a sports fanatic, music lover, love to roam, and the last but not the least tech-obsessed!!!
      </p>
    </div>
  )
}

export default AboutLayout 