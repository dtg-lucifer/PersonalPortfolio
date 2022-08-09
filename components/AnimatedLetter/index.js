import styles from './AnimatedLetter.module.scss';
import React from 'react';

const AnimatedLetters = ({ strArr, idx }) => {
    return <span>
        {
            strArr.map((char, i) => (
                <span 
                key={char + i} 
                className={`${styles.text__animate} _${i + idx}`}
                style={{
                    animationDelay: `1.${i}s`
                }}
                >
                    {char}
                </span>
            ))
        }
    </span>;
};

export default AnimatedLetters;
