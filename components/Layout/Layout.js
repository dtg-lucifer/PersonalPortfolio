import Home from '../Home';
import styles from './Layout.module.scss';

const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.page}>
                <div className={styles.topTags}>
                  <span
                      className={`${styles.tags}`}
                  >
                      &lt;html&gt;
                  </span>
                  <span className={`${styles.tags} ${styles.bodyTags}`}>
                      &lt;body&gt;
                  </span>
                </div>
                <Home />
                <div className={styles.bottomTags}>
                  <span className={`${styles.tags} ${styles.bodyTags}`}>
                      &lt;/body&gt;
                  </span>
                  <span
                      className={`${styles.tags} ${styles.htmlTagsBottom}`}
                  >
                      &lt;/html&gt;
                  </span>
                </div>
            </div>
        </div>
    );
};

export default Layout;
