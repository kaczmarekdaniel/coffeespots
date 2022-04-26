import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const Wrapper = styled.div`
  width: 300px;
  height: 50px;
  border: 2px solid black;
  padding: 3px 0 3px 0;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const TextInput = styled.input.attrs({
  type: "text",
})`
  width: 250px;
  height: 50px;
  color: black;
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: 20px;
  font-weight: bold;
  padding: 0 0 0 10px;

  &::placeholder {
    color: grey;
  }
`;

const Icon = styled(BiSearch)`
  width: 50px;
  height: 50px;
  font-size: 16px;
  padding: 5px 3px 5px 7px;
`;

const Input = ({ placeholder = "Type here ...", setInputValue }) => {
  return (
    <Wrapper className="flexRow">
      <button className="flexRow">
        <Icon />
      </button>
      <TextInput
        placeholder={placeholder}
        onKeyUp={(e) => {
          setInputValue(e.target.value.toLowerCase());
        }}
      ></TextInput>
    </Wrapper>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
