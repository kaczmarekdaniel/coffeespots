import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import Guides from "./Guides";
import Guide from "../Guide/Guide";

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 1400px;
  padding-top: 10vh;
  height: auto;
  z-index: 1;
  flex-wrap: wrap;
`;

const GuidesRouter = (props) => {
  return (
    <Wrapper className="flexRow">
      <Routes>
        <Route path="/" exact element={<Guides />} />
        <Route
          path="/kilka-slow-o-kawie"
          element={<Guide aboutWhat={"kawa"} />}
        />
        <Route path="/aeropress" element={<Guide aboutWhat={"aeropress"} />} />
        <Route path="/kawiarka" element={<Guide aboutWhat={"kawiarka"} />} />
        <Route path="/drip" element={<Guide aboutWhat={"drip"} />} />
        <Route path="/chemex" element={<Guide aboutWhat={"chemex"} />} />
      </Routes>
    </Wrapper>
  );
};

GuidesRouter.propTypes = {};

export default GuidesRouter;
