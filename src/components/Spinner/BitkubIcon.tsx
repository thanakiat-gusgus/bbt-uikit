import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <svg width="485" height="310" viewBox="0 0 485 310" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M132.043 132.721L131.717 133.045C119.563 145.124 119.522 164.749 131.625 176.879L131.95 177.204C144.053 189.334 163.717 189.375 175.872 177.296L176.198 176.972C188.352 164.893 188.393 145.268 176.29 133.138L175.965 132.813C163.862 120.683 144.197 120.642 132.043 132.721Z"
          fill="#02D767"
        />
        <path
          d="M155.418 0.533203L122.169 33.5883L122.376 33.7943L33.697 121.931L33.5699 121.804L0.75 154.431L0.877024 154.558L0.75 154.685L33.2682 187.28L154.354 309.296C154.354 309.296 182.935 271.613 154.831 243.407L66.2152 154.526L154.878 66.374L199.67 111.266C237.905 149.566 265.056 110.41 265.056 110.41L155.418 0.533203Z"
          fill="#02D767"
        />
        <path
          d="M483.632 155.26L484.044 154.848L331.012 1.50488C331.012 1.50488 302.908 38.157 329.535 64.8895L420.04 155.514L331.552 243.46L290.031 201.848C260.37 172.136 221.072 199.043 221.072 199.043L330.139 308.382L363.292 275.279L483.806 155.45L483.632 155.26Z"
          fill="#02D767"
        />
        <path
          d="M309.048 133.091L308.722 133.415C296.568 145.494 296.526 165.119 308.63 177.249L308.955 177.574C321.058 189.704 340.722 189.745 352.876 177.666L353.203 177.342C365.357 165.263 365.398 145.638 353.295 133.508L352.97 133.183C340.866 121.053 321.202 121.012 309.048 133.091Z"
          fill="#02D767"
        />
      </svg>
    </Svg>
  );
};

export default Icon;