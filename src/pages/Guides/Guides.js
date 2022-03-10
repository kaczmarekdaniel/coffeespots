import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import Article from "../../components/Article/Article";
import Guide from "../Guide/Guide";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  max-width: 1400px;
  height: 90vh;
  padding: 10vh 100px 10vh 100px;
  z-index: 1;
  flex-wrap: wrap;
`;

const Guides = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Link to="/guides/kilka-slow-o-kawie" style={{ textDecoration: "none" }}>
        <Article text={"Kawa"} />
      </Link>

      <Link to="/guides/aeropress" style={{ textDecoration: "none" }}>
        <Article text={"Aeropress"} />
      </Link>

      <Link to="/guides/drip" style={{ textDecoration: "none" }}>
        <Article text={"Drip"} />
      </Link>

      <Link to="/guides/chemex" style={{ textDecoration: "none" }}>
        <Article text={"Chemex"} />
      </Link>

      <Link to="/guides/kawiarka" style={{ textDecoration: "none" }}>
        <Article />
      </Link>

      <Link to="/guides/kawiarka" style={{ textDecoration: "none" }}>
        <Article text={"Kawiarka"} />
      </Link>
    </Wrapper>
  );
};

Guides.propTypes = {};

export default Guides;
