import styles from "./MainLogo.module.scss"
import logoP from "../../../assets/images/logo-p.png"
import Image from "next/image"

const MainLogo = () => {
  return (
    <div>
        <Image className={styles.mainLogo} src={logoP} />
        {/* <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            d="M 250 150 L 250 450 L 300 450 L 300 300 C 454 303 448 149 300 150 Q 275 150 250 150 L 237 164 L 238 465 L 289 464 L 300 450 L 300 318 Q 379 319 405 258 C 434 196 374 148 300 150 L 300 181 C 399 173 410 281 300 278 L 300 181 L 300 200 Q 341 187 380 229 "
          />
        </g>
      </svg> */}
    </div>
  )
}

export default MainLogo