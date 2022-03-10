import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  z-index: 10;
  border: 2px solid black;
  position: relative;
  overflow: hidden;
  transition: color 0.4s cubic-bezier(0.61, 0.07, 0.23, 0.89);

  &::after {
    position: absolute;
    content: "";
    width: 200px;
    height: 50px;
    background: #333436;
    left: 0;
    top: 0;
    transform: scaleX(0);

    transform-origin: 0 50%;
    transition: transform 0.4s cubic-bezier(0.61, 0.07, 0.23, 0.89);
    z-index: -1;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:hover {
    color: white;
  }
`;

const SlideFromSideButton = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

SlideFromSideButton.propTypes = {
  children: PropTypes.string,
};

export default SlideFromSideButton;
