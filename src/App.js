import "./styles/App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./features/Navigation/Navigation";
import LandingPage from "./pages/LandingPage/LandingPage";
import Error404 from "./pages/Error404/Error404";
import ComponentsShowOff from "./pages/ComponentsShowOff/ComponentsShowOff";
import Footer from "./features/Footer/Footer";
const ContentContainer = styled.div`
  height: 90vh;
  background-color: lightgray;
  width: 100%;
  display: flex;
`;

function App() {
  return (
    <div className="App flexColumn">
      <Router>
        <Navigation />{" "}
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/components" exact element={<ComponentsShowOff />} />

          <Route path="about" element={<p>about</p>} />

          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
