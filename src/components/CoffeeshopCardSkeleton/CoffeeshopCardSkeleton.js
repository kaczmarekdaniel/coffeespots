import React from "react";
import PropTypes from "prop-types";

import {
  SkeletonWrapper,
  SkeletonElement,
  ImageSkeleton,
  TitleSkeleton,
} from "./CoffeeshopCardSkeleton.styles";

const CoffeeshopCardSkeleton = ({ count = 3 }) => {
  return (
    <SkeletonWrapper>
      {[...Array(count)].map((e, i) => (
        <SkeletonElement key={i}>
          <ImageSkeleton />
          <TitleSkeleton />
        </SkeletonElement>
      ))}
    </SkeletonWrapper>
  );
};

CoffeeshopCardSkeleton.propTypes = {};

export default CoffeeshopCardSkeleton;
