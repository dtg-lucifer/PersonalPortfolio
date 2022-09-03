import Home from '../../components/Home/index';
import styles from './Layout.module.scss';

const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <div className={styles.topTags}>
                    <span
                        className={`${styles.tags} ${styles.topHtml}`}
                    >
                        &lt;html&gt;
                    </span>
                    <span className={`${styles.tags} ${styles.bodyTags} ${styles.topBody}`}>
                        &lt;body&gt;
                    </span>
                </div>

                {/* Home component */}
                <Home />

                <div className={styles.bottomTags}>
                    <span className={`${styles.tags} ${styles.bodyTags} ${styles.bottomBody}`}>
                        &lt;/body&gt;
                    </span>
                    <span
                        className={`${styles.tags} ${styles.bottomHtml} ${styles.htmlTagsBottom}`}
                    >
                        &lt;/html&gt;
                    </span>
                </div>
            </div>
            <svg
                style={{ 
                    position: "absolute", 
                    fontSize: "20px", 
                    height: "20px", 
                    width: "50px", 
                    top: "50%", 
                    right: "10%",
                }}
                className={styles.waves}
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 1C3 2 4 0 6 1 8 2 9 0 11 1 13 2 13 0 16 1 18 2 19 0 21 1 23 2 23 0 26 1 29 2 28 0 31 1 34 2 33 0 36 1"
                    stroke="yellow"
                    strokeWidth=".7px"
                />
            </svg>
        </div>
    );
};

export default Layout;
