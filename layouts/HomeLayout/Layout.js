import Home from '../../components/Home/index';
import styles from './Layout.module.scss';
import styled, { keyframes } from 'styled-components';

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
            <Svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 1C3 2 4 0 6 1 8 2 9 0 11 1 13 2 13 0 16 1 18 2 19 0 21 1 23 2 23 0 26 1 29 2 28 0 31 1 34 2 33 0 36 1 39 2 38 0 41 1 43 2 44 0 46 1 48 2 49 0 51 1 53 2 54 0 56 1 58 2 59 0 61 1 63 2 64 0 66 1"
                    stroke="yellow"
                    strokeWidth=".7px"
                />
            </Svg>
            <SvgLeft
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 1C3 2 4 0 6 1 8 2 9 0 11 1 13 2 13 0 16 1 18 2 19 0 21 1 23 2 23 0 26 1 29 2 28 0 31 1 34 2 33 0 36 1 39 2 38 0 41 1 43 2 44 0 46 1 48 2 49 0 51 1 53 2 54 0 56 1 58 2 59 0 61 1 63 2 64 0 66 1"
                    stroke="yellow"
                    strokeWidth=".7px"
                />
            </SvgLeft>
        </div>
    );
};

const StrokeAnimation = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`

const Svg = styled.svg`
    position: absolute;
    font-size: 20px;
    height: 100px;
    width: 100px;
    top: 90%;
    right: 5%;
    path {
        stroke-dashoffset: 67.19px;
        stroke-dasharray: 67.19px;
        animation: ${StrokeAnimation} 1s 2s ease forwards;
    }
`

const SvgLeft = styled.svg`
    position: absolute;
    font-size: 20px;
    height: 100px;
    width: 100px;
    top: 20%;
    left: 40%;
    path {
        stroke-dashoffset: 67.19px;
        stroke-dasharray: 67.19px;
        animation: ${StrokeAnimation} 1s 1.7s ease forwards;
    }
`

export default Layout;
