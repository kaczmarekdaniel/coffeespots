import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 5;
`;

const Error404 = (props) => {
  return (
    <Wrapper className="flexColumn">
      <h1>404</h1>
      <h1> . . . </h1>
    </Wrapper>
  );
};

Error404.propTypes = {};

export default Error404;
