import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Article from "../../components/Article/Article";

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 1400px;
  padding-top: 10vh;
  height: auto;
  z-index: 1;
  flex-wrap: wrap;
`;

const Guides = (props) => {
  return (
    <Wrapper className="flexRow">
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </Wrapper>
  );
};

Guides.propTypes = {};

export default Guides;
