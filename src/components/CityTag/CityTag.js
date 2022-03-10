import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: auto;
  height: 35px;
  border: 2px solid black;
  margin: 2px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  z-index: 10;
  position: relative;
  color: black;
  transition: color 0.4s cubic-bezier(0.61, 0.07, 0.23, 0.89);

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
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

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    cursor: pointer;
    border: none;
    z-index: 11;
  }

  &.active {
    background-color: #333436;

    color: white;
  }
`;

const CityTag = ({ text = "Stargard" }) => {
  const inputRef = useRef();

  const addOrRemoveClass = (target) => {
    if (target.value.indexOf("active") >= 0) {
      target.remove("active");
    } else {
      target.add("active");
    }
  };

  return (
    <Wrapper className="flexRow" ref={inputRef}>
      {text}
      <button
        onClick={() => addOrRemoveClass(inputRef.current.classList)}
      ></button>
    </Wrapper>
  );
};

CityTag.propTypes = {};

export default CityTag;
