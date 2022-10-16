import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../../components/Input/Input";
import { useSearchParams } from "react-router-dom";

const FilterBox = styled.header`
  height: 75px;
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 150;
  margin-top: 9vh;
  @media screen and (min-width: 850px) {
    border-radius: 0px;
  }

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

const LocationSelect = styled.button`
  width: 150px;
  height: 50px;
  background: violet;
  margin-left: 24px;
`;
const LocationDropdown = styled.div``;

const Filters = (props) => {
  let [searchParams, setSearchParams] = useSearchParams({});
  const input = useRef("");

  const handleChange = (e) => {
    setSearchParams({ query: e.target.value }, "push");
  };
  return (
    <FilterBox className="flexRow">
      <input type="text" onChange={handleChange}></input>
      <LocationSelect>
        <span>Location</span>
        <LocationDropdown></LocationDropdown>
      </LocationSelect>
    </FilterBox>
  );
};

Filters.propTypes = {};

export default Filters;
