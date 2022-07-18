import React from "react";
import styled from "styled-components";
import Input from "../../components/Input/Input";

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
  return (
    <FilterBox className="flexRow">
      <Input type="text"></Input>
      <LocationSelect>
        <span>Location</span>
        <LocationDropdown></LocationDropdown>
      </LocationSelect>
    </FilterBox>
  );
};

Filters.propTypes = {};

export default Filters;
