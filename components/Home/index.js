import styles from './Home.module.scss';
import { SiGithubactions } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import AnimatedLetters from '../AnimatedLetter';
import MainLogo from './MainLogo';
import { useRouter } from 'next/router';

const Home = () => {
    const nameArray = ['P', 'i', 'u', 's', 'h'];
    const router = useRouter();
    return (
        <div className={styles.container} style={{ position: "relative"}}>
            {/*             
            <div className={styles.iconZone}>
                <div className={styles.icons}><SiGithubactions /></div>
                <div className={styles.icons}><FiGithub /></div>
                <div className={styles.icons}><FaReact /></div>
                <div className={styles.icons}><FaJava /></div>
                <div className={styles.icons}><FaJsSquare /></div>
                <div className={styles.icons}><FaCode /></div>
            </div>
            */}
            <div className={styles.textZone}>
                <h2>Hi,</h2>
                <h1>
                    <span className={styles.namePrefix}>I&apos;m</span>{' '}
                    <span className={styles.name}>
                        <AnimatedLetters strArr={nameArray} idx={10} />
                    </span>
                    {' , '}
                    <span className={styles.mainJob}>Software developer</span>
                </h1>
                <h3>
                    <span>Full Stack Developer</span>
                    {' / '}
                    <span>Java Dveloper</span>
                    {' / '}
                    <span>Android Developer</span>
                    {' / '}
                    <span>Javascript Expert</span>
                    {' / '}
                    <span>Youtuber</span>
                </h3>
                <button className={styles.contactBtn} onClick={() => router.push("/contact")}>Contact Me</button>
            </div>
            <div className={styles.mainLogo}>
                <MainLogo />
            </div>
        </div>
    );
};

export default Home;
