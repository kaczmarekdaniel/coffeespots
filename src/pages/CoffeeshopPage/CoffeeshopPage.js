import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 5;
`;

const CoffeeshopPage = (props) => {
  const params = useParams();
  console.log(params.coffeeshop);
  return (
    <Wrapper className="flexColumn">kawa jes - {params.coffeeshop}</Wrapper>
  );
};

CoffeeshopPage.propTypes = {};

export default CoffeeshopPage;
