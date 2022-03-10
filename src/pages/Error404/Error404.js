import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
      <Link to="/">Wróc do strony głównej</Link>
    </Wrapper>
  );
};

Error404.propTypes = {};

export default Error404;
