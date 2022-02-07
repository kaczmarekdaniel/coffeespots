import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";

const Wrapper = styled.button`
display: flex;
justify-content: flex-end;
align-items: center;
  width: auto;
  height: 50px;
  background-color: transparent;
  border: 2px solid black;
  position: relative;
  p {
      font-size 16px;
      font-weight: bold;
      margin: 0 0 0 10px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;

  }
  overflow: hidden;
  transition: color .4s cubic-bezier(.61,.07,.23,.89);
  
  &::after {
    position: absolute;
    content: '';

    width: 500px;
    height: 500px;
    background: #333436;

    left: calc(100% - 27px);
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 300px;
    transform-origin: 50%;
    transition: transform 0.4s cubic-bezier(.61,.07,.23,.89);
    z-index: -1;
  }
  
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
  }
  
  &:hover {
    color: white;
  }
`;

const Circle = styled.div`
  background: #333436;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-left: 10px;
  color: white;
  line-height: 35px;
  font-size: 20px;
  margin: 0 10px 0 10px;
  transition: all 0.1s cubic-bezier(0.61, 0.07, 0.23, 0.89);

  &:hover {
    width: 36px;
    height: 36px;
    margin: 0 9px 0 10px;
    line-height: 36px;
    font-size: 21px;
  }
`;

const ArrowButton = ({ children }) => {
  return (
    <Wrapper>
      <p>{children}</p>
      <Circle className="flexRow">
        <AiOutlineArrowRight className="icon" />
      </Circle>
    </Wrapper>
  );
};

ArrowButton.propTypes = {};

export default ArrowButton;
