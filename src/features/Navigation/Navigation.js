import React from "react";
import styled from "styled-components";
import NavButton from "../../components/NavButton/NavButton";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 85px;
  box-shadow: 0px 2px 50px rgba(17, 25, 33, 0.05);
  background-color: white;
  padding: 0 3% 0 3%;
  z-index: 10;
  position: fixed;
  top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Logo = styled.div`
  width: 15%;
  height: 50%;
  text-align: left;
  color: #695650;
`;

const NavBar = styled.div`
  width: 35%;
  height: 75%;
`;

const AppButton = styled.div`
  width: 15%;
  height: 50%;
`;

const Navigation = (props) => {
  return (
    <Wrapper>
      <Logo>
        <h1>coffee</h1>
      </Logo>
      <NavBar className="flexRow">
        <NavButton text={"strona główna"} target={"/"} />
        <NavButton text={"poradniki"} target={"/guides"} />
        <NavButton text={"ui"} target={"/components"} />
        <NavButton text={"kawiarnie"} target={"/coffeeshops"} />
      </NavBar>
      <AppButton className="flexRow">Coffee App -&gt;</AppButton>
    </Wrapper>
  );
};

Navigation.propTypes = {};

export default Navigation;
