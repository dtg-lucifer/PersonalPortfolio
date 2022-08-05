import styles from "./Home.module.scss"

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textZone}>
                <h2>Hi, I'm</h2>
                <h1>
                    <span className={styles.name}>Piush</span><br />
                    <span className={styles.mainJob}>Software developer</span>
                </h1>
                <h3>
                    <span>Full Stack Developer</span><br />
                    <span>Java Dveloper</span><br />
                    <span>Javascript Expert</span><br />
                    <span>Youtuber</span><br />
                    <span></span><br />
                </h3>    
            </div>
        </div>
    )
}

export default Home