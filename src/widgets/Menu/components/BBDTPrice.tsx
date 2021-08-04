import React from "react";
import styled from "styled-components";
import { KubIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  bbdtPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ bbdtPriceUsd }) => {
  return bbdtPriceUsd ? (
    <PriceLink
      target="_blank"
    >
      <KubIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${bbdtPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
