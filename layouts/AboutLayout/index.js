import styles from "./About.module.scss";
import AnimatedLetter from "../../components/AnimatedLetter/index"
import Icons from "../../components/About/Icons"

const AboutLayout = () => {
  return (
    <div className={`${styles.container} ${styles.aboutPage}`}>
      <div className={styles.textZone}>
        <div className={`${styles.aboutTag} ${styles.topTag}`}>&lt;about&gt;</div>
        <div className={styles.textArea}>
          <h1 className={styles.heading}>
            <AnimatedLetter strArr={[
              "A",
              "b",
              "o",
              "u",
              "t"
            ]} idx={20} />
          </h1>
          <p className={styles.aboutQuote} style={{ animationDelay: "1.2s" }}>
            I'm very ambitious Full Stack Web developer looking for a role in established IT company withthe opputunity to work woth the latest technologies on challenging and diverse projects
          </p>
          <p className={styles.aboutQuote} style={{ animationDelay: "1.6s" }}>
            I'm quietly confident, naturally curious, and perpetually working on improving my chops one design and one dsa problem at a time.
          </p>
          <p className={styles.aboutQuote} style={{ animationDelay: "2s" }}>
            If I need to define myself in one sentence htat would be a young person, student, a sports fanatic, music lover, love to roam, and the last but not the least tech-obsessed!!!
          </p>
        </div>
        <div className={`${styles.aboutTag} ${styles.bottomTag}`}>&lt;/about&gt;</div>
        <div className={styles.icons}>
          <Icons />
        </div>
      </div>
    </div>
  )
}

export default AboutLayout 