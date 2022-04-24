import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Wrapper = styled(NavLink)`
  width: auto;
  height: 50px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2px 10px 3px 10px;
  text-decoration: none;
  color: black;
  white-space: nowrap;
  &.active {
    position: relative;
    z-index: 10;
  }
  &.active:before {
    position: absolute;
    height: calc(100% - 1px);
    content: "";
    width: 100%;
    top: 0;
    left: 0;
    border-bottom: 3px solid black;
    z-index: 5;
  }
  &:hover .active {
    border-bottom: 2px solid black;
  }
`;

const NavButton = ({ text = "strona głowna", target }) => {
  return (
    <>
      <Wrapper to={target}>{text}</Wrapper>
    </>
  );
};

NavButton.propTypes = {
  text: PropTypes.string,
};

export default NavButton;
