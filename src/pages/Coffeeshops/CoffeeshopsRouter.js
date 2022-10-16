import React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import Coffeeshops from "./Coffeeshops";
import CoffeeshopPage from "../CoffeeshopPage/CoffeeshopPage";

const CoffeeshopsRouter = (props) => {
  return (
    <Routes>
      <Route path="/*" exact element={<Coffeeshops />}></Route>
      <Route path="/:coffeeshop" exact element={<CoffeeshopPage />}></Route>
    </Routes>
  );
};

CoffeeshopsRouter.propTypes = {};

export default CoffeeshopsRouter;
