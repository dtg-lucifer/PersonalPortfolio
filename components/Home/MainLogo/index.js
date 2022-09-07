import Image from "next/image"
import { useState } from "react"
import logoP from "../../../assets/images/P.png"
import styles from "./MainLogo.module.scss"
import styled, { keyframes } from "styled-components"

const MainLogo = () => {

  const [opacity, setOpacity] = useState(0);
  setTimeout(() => setOpacity(1), 3000)

  return (
    <div className={styles.container}>
      <BlobFilled viewBox="0 0 264 284" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_7_3)">
          <path d="M194.375 29.1776L95.102 3.32543C68.1733 -3.68724 39.6149 5.45315 21.7625 26.7984C10.9333 39.7463 5 56.0888 5 72.9684V200.091C5 248.536 50.7771 283.914 97.6569 271.701L203.26 244.187C239.17 234.831 262.597 200.325 258.043 163.496L249.166 91.7079C245.444 61.6049 223.728 36.8217 194.375 29.1776Z" fill="#17172C" />
        </g>
        <defs>
          <filter id="filter0_d_7_3" x="0" y="0" width="263.608" height="283.13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_3" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_3" result="shape" />
          </filter>
        </defs>
      </BlobFilled>

      <Blob viewBox="0 0 258 277" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M191.375 30.3371L92.102 4.48489C65.1733 -2.52778 36.6149 6.61261 18.7625 27.9579C7.93331 40.9058 2 57.2483 2 74.1279V201.25C2 249.695 47.7771 285.073 94.6569 272.86L200.26 245.346C236.17 235.99 259.597 201.484 255.043 164.655L246.166 92.8674C242.444 62.7644 220.728 37.9812 191.375 30.3371Z"
          stroke="#FFD700"
          strokeWidth=".5"
        />
      </Blob>
      <svg className={styles.mainLogo} width="346" height="430" viewBox="0 0 346 430" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="P"
          d="M128.661 
            234.292C133.894 
            239.492 
            138.732 
            243.265 
            143.17 
            245.484L143.263 
            245.531L143.36 
            245.569C148.891 
            247.782 
            156.072 
            248.82 
            164.768 
            248.82C188.925 
            248.82 211.736 
            245.023 
            233.182 
            237.414C254.918 
            229.823 273.778 
            219.625 289.727 
            206.796L289.732 
            206.792C306.01 
            193.631 318.856 178.366 328.238 
            160.997C337.99 143.579 342.884 
            125.245 342.884 106.032C342.884
            90.6834 339.917 76.66 333.941 
            64.0045C327.972 51.3658 
            319.371 40.4897 308.168 
            31.3877C296.962 22.2826 
            283.357 15.3206 267.408 
            10.4635C251.422 5.25397 
            233.584 2.66797 213.92 
            2.66797C197.415 2.66797 
            180.068 3.87142 161.881 
            6.2735L161.874 
            6.27433C144.033 8.67603 126.701 
            12.1073 109.878 16.5694C93.0609 20.689 77.2581 25.6698 62.4729 31.5151C47.6706 37.3671 35.2031 43.7643 25.1087 50.726L23.9164 51.5482L24.0366 52.9916C24.4043 57.403 25.6799 62.2593 27.7908 67.5364C29.8744 72.7454 32.3027 77.9481 35.0741 83.1445L35.0913 83.1767L35.1094 83.2083C37.8877 88.0704 40.8454 92.5952 43.984 96.78L44.0224 96.8312L44.0634 96.8805C47.5688 101.087 50.986 104.35 54.3253 106.576L55.8906 107.62L57.3269 106.404C66.019 99.0496 76.9383 91.9838 90.1212 85.2225C102.397 79.0852 115.661 73.6374 129.918 68.8823C127.597 77.37 125.279 85.2322 122.963 92.4701L122.949 92.5137L122.937 92.5579C120.563 101.035 117.849 109.687 114.795 118.512C111.739 126.998 108.171 136.173 104.09 146.036C99.9941 155.934 95.2163 167.538 89.7566 180.846C77.4705 209.854 66.7198 235.281 57.5046 257.124L57.5008 257.133L57.4971 257.142C48.6281 278.633 40.785 297.217 33.9672 312.898C27.1436 328.251 21.3445 341.214 16.5696 351.787C11.8012 362.346 7.72824 370.829 4.3477 377.252L3.6993 378.484L4.40516 379.684C11.3265 391.45 18.9778 401.207 27.3788 408.913C35.9419 417.111 46.9387 422.751 60.2558 425.905L62.7532 426.496L63.279 423.984C69.3998 394.74 77.7336 364.633 88.2839 333.662C98.8503 303.284 112.307 270.162 128.661 234.292ZM217.438 58.4043L218.53 56.9841L217.536 55.4932L213.592 49.5769C225.763 47.9194 237.648 47.092 249.248 47.092C272.456 47.092 289.495 52.4768 300.809 62.8211L300.824 62.8344L300.838 62.8475C312.186 72.8979 317.916 86.3486 317.916 103.472C317.916 116.181 313.694 128.115 305.118 139.329L305.104 139.348L305.09 139.367C296.813 150.623 284.995 160.644 269.531 169.387C254.425 177.777 236.059 184.53 214.392 189.61C193.845 194.103 171.125 196.471 146.22 196.698C153.767 180.947 160.872 165.932 167.536 151.653C175.039 136.307 181.859 122.496 187.996 110.222L188.002 110.21L188.008 110.198C194.135 97.6033 199.739 86.9064 204.821 78.0973C209.924 69.2537 214.125 62.7102 217.438 58.4043Z"
          stroke="white"
          strokeWidth="1.5"
          style={{ opacity: opacity === 0 ? 1 : 0 }}
        />
      </svg>
      <Image src={logoP} width={346} height={430} style={{ opacity: opacity }} />
    </div>
  )
}

const AnimateBlobOpacity = keyframes`
  100% {
    opacity: 1;
  }
`

const AnimateBlobOutline = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`

const Blob = styled.svg`
  position: absolute;  
  top: 50%;
  left: 50%;
  height: 150%;
  translate: -50% -50%;
  path:first-child {
    stroke-dasharray: 872.46px;
    stroke-dashoffset: 872.46px;
    animation: ${AnimateBlobOutline} 4s 3s ease-in-out both;
  }
`

const BlobFilled = styled.svg`
  position: absolute;  
  top: 50%;
  left: 50%;
  height: 150%;
  translate: -50% -50%;
  flex-direction: column;
  opacity: 0;
  animation: ${AnimateBlobOpacity} 2s 6s ease forwards;
`

export default MainLogo