import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
interface LogoProps extends SvgProps {
  isDark: boolean;
}
const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#02D767" : "#02D767";
  return (
    <Svg viewBox="0 0 160 34" {...props}>
  <path
    d="M56.2822 22.7399V1.58096C56.2837 1.48237 56.3087 1.38546 56.3552 1.29844C56.4016 1.21143 56.4682 1.13667 56.5492 1.08045C56.7477 0.936718 56.9886 0.863801 57.2335 0.873618C57.4823 0.865647 57.727 0.938228 57.9311 1.08045C58.0154 1.13457 58.0854 1.20849 58.1348 1.29568C58.1843 1.38286 58.2117 1.48078 58.2148 1.58096V11.5623C58.6012 10.8561 59.1743 10.2695 59.8715 9.86672C60.5688 9.46396 61.3633 9.26048 62.1684 9.27844C62.8749 9.27005 63.5752 9.41126 64.2233 9.69277C64.8713 9.9742 65.4524 10.3896 65.9284 10.9117C66.4348 11.43 66.8335 12.0435 67.1013 12.7167C67.3692 13.3898 67.5008 14.1094 67.4887 14.8339V18.0737C67.4947 19.5436 66.9237 20.9573 65.8983 22.0108C64.838 23.1509 63.6142 23.7203 62.2268 23.7192C61.3577 23.7256 60.504 23.4912 59.7601 23.0419C59.0767 22.6639 58.5186 22.0945 58.1547 21.4036V22.7282C58.1525 22.8326 58.1275 22.9352 58.0814 23.0289C58.0353 23.1226 57.9691 23.2051 57.8877 23.2704C57.7082 23.4308 57.4742 23.5167 57.2335 23.5107C56.9895 23.5156 56.7521 23.4314 56.5659 23.2737C56.4813 23.2121 56.4117 23.132 56.3625 23.0395C56.3134 22.947 56.2859 22.8445 56.2822 22.7399ZM58.2148 18.9812C58.2148 19.5129 58.5864 20.1335 59.3296 20.8431C59.6617 21.1793 60.0572 21.4463 60.4932 21.6287C60.9291 21.8111 61.397 21.9053 61.8697 21.9058C62.861 21.9058 63.7232 21.5121 64.4564 20.7246C65.159 20.0135 65.554 19.0548 65.5562 18.0553V14.8522C65.5562 13.8857 65.1896 13.0188 64.4564 12.2514C64.1266 11.8855 63.723 11.5937 63.2724 11.395C62.8216 11.1963 62.3338 11.0953 61.8413 11.0986C60.8955 11.0965 59.9873 11.4683 59.3146 12.1329C58.5803 12.8235 58.2137 13.73 58.2148 14.8522V18.9812Z"
    fill="text" />
  <path
    d="M71.2632 4.92418C71.1404 4.81384 71.0424 4.67875 70.9757 4.5278C70.9089 4.37676 70.8749 4.21339 70.876 4.04835C70.8744 3.88515 70.9082 3.72354 70.975 3.57469C71.0418 3.42575 71.1402 3.29309 71.2632 3.18586C71.5218 2.94773 71.863 2.81968 72.2145 2.82883C72.3816 2.82547 72.5478 2.85526 72.7034 2.91651C72.859 2.97785 73.0008 3.06939 73.1207 3.18586C73.2396 3.29561 73.3342 3.42902 73.3983 3.57762C73.4624 3.72622 73.4946 3.88657 73.4928 4.04835C73.4939 4.21197 73.4613 4.37416 73.3974 4.52478C73.3334 4.67539 73.2392 4.81132 73.1207 4.92418C73.0032 5.04492 72.8621 5.14033 72.7062 5.20426C72.5503 5.26829 72.3829 5.29958 72.2145 5.29623C72.0391 5.30076 71.8646 5.27022 71.7012 5.20628C71.5378 5.14242 71.3889 5.04652 71.2632 4.92418ZM71.2632 22.7382V10.1693C71.2647 10.0707 71.2897 9.97385 71.3362 9.88675C71.3826 9.79974 71.4491 9.72506 71.5302 9.66884C71.728 9.52377 71.9694 9.45018 72.2145 9.46025C72.4629 9.4506 72.7078 9.52201 72.9121 9.66381C72.9967 9.71759 73.0669 9.79143 73.1164 9.8787C73.1658 9.96596 73.1931 10.0641 73.1958 10.1643V22.7332C73.1912 22.8396 73.1619 22.9434 73.11 23.0364C73.0581 23.1294 72.9851 23.2089 72.897 23.2687C72.7044 23.4253 72.4627 23.5091 72.2145 23.5056C71.9705 23.5106 71.7332 23.4263 71.5469 23.2687C71.4626 23.2074 71.3934 23.1279 71.3442 23.036C71.2951 22.9441 71.2674 22.8423 71.2632 22.7382Z"
    fill="text" />
  <path
    d="M77.4746 19.1498V3.50787C77.478 3.40626 77.5073 3.30716 77.5585 3.21973C77.6105 3.1323 77.6835 3.0593 77.7716 3.00736C77.9604 2.87302 78.187 2.80078 78.4186 2.80053C78.6627 2.79633 78.9019 2.86866 79.1033 3.00736C79.1905 3.05921 79.2635 3.13213 79.3156 3.21965C79.3676 3.30708 79.3969 3.40626 79.4003 3.50787V9.45536H83.2383C83.3339 9.45452 83.4279 9.47617 83.5126 9.51854C83.5982 9.56083 83.6721 9.62267 83.7291 9.69894C83.8533 9.86466 83.9213 10.0664 83.9213 10.2736C83.9213 10.4809 83.8533 10.6826 83.7291 10.8484C83.6721 10.9244 83.5982 10.986 83.5126 11.028C83.4279 11.0701 83.3339 11.0914 83.2383 11.0903H79.4003V19.0981C79.4003 20.0623 79.6034 20.7358 80.0095 21.1183C80.4156 21.5009 81.1364 21.6923 82.1718 21.6923H83.0067C83.125 21.6888 83.2433 21.7102 83.3532 21.755C83.464 21.7998 83.563 21.867 83.646 21.9525C83.7274 22.0354 83.7929 22.1339 83.8365 22.2423C83.8793 22.3505 83.9011 22.4664 83.8995 22.5831C83.9011 22.8229 83.8105 23.0543 83.646 23.2288C83.5655 23.3179 83.4665 23.3887 83.3566 23.4362C83.2458 23.4837 83.1267 23.5069 83.0067 23.504H82.1718C79.0403 23.5084 77.4746 22.0571 77.4746 19.1498Z"
    fill="text" />
  <path
    d="M86.958 22.7383V1.55097C86.9597 1.45238 86.9849 1.35563 87.031 1.26862C87.0772 1.18169 87.1443 1.10693 87.2248 1.05046C87.422 0.904458 87.6637 0.829779 87.9087 0.83859C88.1587 0.830367 88.4037 0.903619 88.6085 1.04719C88.6924 1.10131 88.762 1.17515 88.8115 1.26241C88.861 1.34959 88.8879 1.44759 88.8904 1.54761V16.0201L96.1434 9.57543C96.2752 9.4807 96.4279 9.41945 96.589 9.39696C96.839 9.40233 97.0782 9.50318 97.256 9.67889C97.3517 9.75625 97.4289 9.8535 97.4834 9.96384C97.5371 10.0742 97.5665 10.195 97.5682 10.3179C97.5749 10.416 97.5606 10.5145 97.5246 10.6062C97.4885 10.698 97.4331 10.7807 97.3618 10.8484L92.9927 14.6854L98.1346 22.2044C98.2403 22.376 98.2781 22.5813 98.2403 22.7795C98.2017 22.9778 98.0901 23.1543 97.9273 23.2738C97.8367 23.3749 97.7268 23.4565 97.6043 23.5138C97.4818 23.5712 97.3483 23.603 97.2133 23.6075C97.0916 23.6045 96.9733 23.5701 96.8684 23.5075C96.7643 23.4449 96.6788 23.3563 96.6192 23.2504L91.6258 15.91L88.8904 18.3156V22.7433C88.8871 22.848 88.8594 22.9505 88.8107 23.0433C88.762 23.1361 88.6924 23.2165 88.6085 23.2788C88.4113 23.4398 88.1629 23.524 87.9087 23.5157C87.6654 23.5207 87.4279 23.4365 87.2416 23.2788C87.156 23.2164 87.0856 23.1353 87.0369 23.0416C86.9874 22.9479 86.9605 22.8441 86.958 22.7383Z"
    fill="text" />
  <path
    d="M100.956 18.132V10.1993C100.963 10.1 100.992 10.0035 101.041 9.91691C101.09 9.83032 101.158 9.7558 101.24 9.69883C101.435 9.53706 101.684 9.45222 101.937 9.4602C102.177 9.46095 102.408 9.54536 102.591 9.69883C102.676 9.75362 102.747 9.82738 102.799 9.91422C102.851 10.001 102.881 10.0986 102.888 10.1993V18.1136C102.889 18.604 102.987 19.0894 103.175 19.5421C103.364 19.9947 103.64 20.4056 103.988 20.7512C104.32 21.1154 104.724 21.4064 105.174 21.6056C105.625 21.8047 106.111 21.9075 106.604 21.9075C107.096 21.9075 107.584 21.8047 108.035 21.6056C108.485 21.4064 108.889 21.1154 109.22 20.7512C109.568 20.4056 109.844 19.9947 110.033 19.5421C110.222 19.0894 110.319 18.604 110.32 18.1136V10.1676C110.324 10.0658 110.352 9.96658 110.404 9.87907C110.456 9.79155 110.529 9.71863 110.617 9.66711C110.818 9.52774 111.057 9.45483 111.301 9.4586C111.54 9.45374 111.775 9.5269 111.969 9.66711C112.053 9.72132 112.123 9.79524 112.172 9.88242C112.221 9.96969 112.248 10.0675 112.251 10.1676V18.1303C112.251 19.6163 111.69 20.9192 110.57 22.0391C110.053 22.5702 109.436 22.9924 108.753 23.2807C108.07 23.5689 107.336 23.7174 106.596 23.7174C105.854 23.7174 105.12 23.5689 104.437 23.2807C103.754 22.9924 103.137 22.5702 102.62 22.0391C101.512 20.9181 100.957 19.6157 100.956 18.132Z"
    fill="text" />
  <path
    d="M116.442 22.7399V1.58097C116.444 1.48238 116.469 1.38546 116.515 1.29845C116.562 1.21144 116.629 1.13668 116.71 1.08046C116.908 0.936976 117.149 0.864142 117.394 0.873624C117.643 0.86624 117.888 0.938738 118.093 1.08046C118.177 1.13491 118.246 1.20892 118.296 1.29602C118.345 1.3832 118.372 1.48095 118.375 1.58097V11.5623C118.762 10.8561 119.335 10.2695 120.032 9.86672C120.729 9.46396 121.524 9.26049 122.329 9.27844C123.035 9.27005 123.736 9.41127 124.383 9.69278C125.032 9.97421 125.613 10.3896 126.088 10.9117C126.595 11.43 126.994 12.0435 127.261 12.7167C127.529 13.3899 127.661 14.1094 127.649 14.8339V18.0737C127.655 19.5436 127.084 20.9573 126.059 22.0109C124.998 23.1509 123.774 23.7203 122.387 23.7192C121.518 23.7256 120.665 23.4912 119.92 23.0419C119.237 22.664 118.679 22.0945 118.315 21.4036V22.7282C118.313 22.8326 118.288 22.9353 118.242 23.029C118.196 23.1226 118.13 23.2051 118.048 23.2704C117.869 23.4308 117.635 23.5167 117.394 23.5107C117.15 23.5156 116.912 23.4314 116.726 23.2737C116.641 23.2121 116.572 23.132 116.523 23.0395C116.473 22.947 116.447 22.8445 116.442 22.7399ZM118.375 18.9812C118.375 19.5129 118.746 20.1335 119.49 20.8431C119.822 21.1792 120.218 21.4462 120.655 21.6286C121.091 21.811 121.559 21.9053 122.031 21.9058C123.021 21.9058 123.883 21.5121 124.617 20.7246C125.319 20.0135 125.714 19.0548 125.717 18.0553V14.8522C125.717 13.8857 125.35 13.0188 124.617 12.2514C124.287 11.8855 123.883 11.5937 123.433 11.395C122.982 11.1963 122.494 11.0953 122.001 11.0986C121.056 11.0934 120.146 11.4622 119.471 12.1246C118.737 12.8153 118.371 13.7217 118.371 14.8439L118.375 18.9812Z"
    fill="text" />
  <path
    d="M14.0062 14.2932L13.9721 14.3272C12.7045 15.5893 12.7002 17.6401 13.9625 18.9076L13.9965 18.9417C15.2587 20.2092 17.3095 20.2135 18.5771 18.9513L18.6113 18.9174C19.8788 17.6551 19.883 15.6044 18.6208 14.3369L18.5868 14.3027C17.3245 13.0352 15.2737 13.031 14.0062 14.2932Z"
    fill="#02D767" />
  <path
    d="M16.4475 0.502258L12.9781 3.95692L13.0012 3.97781L3.74509 13.1896V13.1749L0.31543 16.5855L0.328016 16.5981L0.31543 16.6128L3.70733 20.0172L16.3365 32.7693C16.3365 32.7693 19.322 28.8308 16.3868 25.8831L7.14328 16.5939L16.3931 7.37592L21.063 12.0729C25.0436 16.0764 27.8825 11.9849 27.8825 11.9849L16.4475 0.502258Z"
    fill="#02D767" />
  <path
    d="M50.6741 16.6632L50.7181 16.6213L34.7515 0.586243C34.7515 0.586243 31.8184 4.41799 34.5965 7.20642L44.0243 16.6758L34.7955 25.8687L30.4776 21.5362C27.3852 18.4293 23.2852 21.2429 23.2852 21.2429L34.6635 32.6648L38.1266 29.2143L50.6972 16.6926L50.6741 16.6632Z"
    fill="#02D767" />
  <path
    d="M32.4672 14.2932L32.433 14.3272C31.1654 15.5893 31.1611 17.6401 32.4234 18.9076L32.4574 18.9417C33.7197 20.2092 35.7705 20.2135 37.0381 18.9513L37.0721 18.9174C38.3397 17.6551 38.344 15.6044 37.0818 14.3369L37.0478 14.3027C35.7855 13.0352 33.7347 13.031 32.4672 14.2932Z"
    fill="#02D767" />
    </Svg>
  );
};
export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);














