import React from "react";
import styles from "./Icons.module.scss";
import {
  FaAngular,
  FaHtml5,
  FaCss3,
  FaReact,
  FaJsSquare,
  FaGitAlt
} from "react-icons/fa";

const Icons: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cubeSpinner}>
                <div className={styles.face1}>
                    <FaAngular color="#DD0031" />
                </div>
                <div className={styles.face2}>
                    <FaReact color="#F06529" />
                </div>
                <div className={styles.face3}>
                    <FaHtml5 color="#28A4D9" />
                </div>
                <div className={styles.face4}>
                    <FaCss3 color="#5ED4F4" />
                </div>
                <div className={styles.face5}>
                    <FaJsSquare color="#EFD81D" />
                </div>
                <div className={styles.face6}>
                    <FaGitAlt color="#EC4" />
                </div>
            </div>
        </div>
    );
};

export default Icons;
