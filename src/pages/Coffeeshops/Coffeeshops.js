import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { coffeshops } from "../../services/mock-data/coffeeshops";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-top: 10vh;
  z-index: 1;
  background-color: blue;

  p {
    color: black;
  }
`;

const Coffeeshops = (props) => {
  return (
    <Wrapper className="flexColumn">
      {coffeshops.forEach((element) => (
        <p>{element.name}</p>
      ))}
    </Wrapper>
  );
};

Coffeeshops.propTypes = {};

export default Coffeeshops;
