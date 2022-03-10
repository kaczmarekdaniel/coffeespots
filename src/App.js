import { useEffect } from "react";
import { useLocation } from "react-router";
import "./styles/App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./features/Navigation/Navigation";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error404 from "./pages/Error404/Error404";
import ComponentsShowOff from "./pages/ComponentsShowOff/ComponentsShowOff";
import Footer from "./features/Footer/Footer";
import GuidesRouter from "./pages/Guides/GuidesRouter";
import CoffeeshopsRouter from "./pages/Coffeeshops/CoffeeshopsRouter";
const ContentContainer = styled.div`
  height: 90vh;
  background-color: lightgray;
  width: 100%;
  display: flex;
`;

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App flexColumn">
      <Navigation />{" "}
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="components" exact element={<ComponentsShowOff />} />

        <Route path="guides/*" exact element={<GuidesRouter />} />
        <Route path="coffeeshops/*" exact element={<CoffeeshopsRouter />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
