import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: auto;
  width: 100%;
  background-color: blue;
  position: relative;
  z-index: 10;
  flex-wrap: wrap;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 102vw;
    height: 100%;
    content: "";
    background: #333436;
    z-index: 5;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Container = styled.div`
  width: 1400px;
`;

const Section = styled.div`
  height: 150px;
  width: 50%;
  @media screen and (min-width: 1000px) {
    width: 100%;
    max-width: 400px;
  }
  @media screen and (min-width: 1500px) {
    width: 100%;
    max-width: 700px;
  }

  a {
    color: white;
    cursor: pointer;
  }
`;

const Footer = (props) => {
  return (
    <Wrapper>
      <Section className="flexColumn">
        <a>Strona główna</a>
        <Link to="/articles">Poradniki</Link>
        <Link to="/app">Szukaj kawiarni</Link>
      </Section>
      <Section>2</Section>
    </Wrapper>
  );
};

Footer.propTypes = {};

export default Footer;
