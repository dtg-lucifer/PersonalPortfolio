import Image from 'next/image';
import Link from 'next/link';
import styles from './SideBar.module.scss';
import logoS from '../../assets/images/logo-s.png';
import { FaHome, FaLaptopCode, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { IoMdPerson } from 'react-icons/io';
import { useRouter } from "next/router"

const SideBar = () => {
    const router = useRouter()
    return (
        <div className={styles.mainWrapper}>
            <Link className={styles.logo} href="/">
                <div className={styles.logo}>
                    <Image src={logoS} height={200} width={150} />
                    <h4>Piush</h4>
                </div>
            </Link>
            <nav className={styles.navBar}>
                <Link href="/">
                    <div className={`${styles.link} ${styles.homeLink} ${router.pathname == "/" && styles.active}`}>
                        <FaHome />
                    </div>
                </Link>
                <Link href="/about">
                    <div className={`${styles.link} ${styles.aboutLink} ${styles.homeLink} ${router.pathname == "/about" && styles.active}`}>
                        <IoMdPerson />
                    </div>
                </Link>
                <Link href="/projects">
                    <div className={`${styles.link} ${styles.aboutLink} ${styles.homeLink} ${router.pathname.split("/").includes("projects") && styles.active}`}>
                        <FaLaptopCode />
                    </div>
                </Link>
                <Link href="/contact">
                    <div className={`${styles.link} ${styles.contactLink} ${styles.homeLink} ${router.pathname == "/contact" && styles.active}`}>
                        <HiMail />
                    </div>
                </Link>
            </nav>
            <div className={styles.social}>
                <Link href={"https://github.com/dtg-lucifer"} target={"_top"}><FaGithub /></Link>
                <Link href={"https://www.linkedin.com/in/piush-bose-a0b586235/"} target={"_top"}><FaLinkedin /></Link>
                <Link href={"https://www.instagram.com/p_i_u_s_h_._b_o_s_e/"} target={"_top"}><FaInstagram /></Link>
            </div>
        </div>
    );
};

export default SideBar;
