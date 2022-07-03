import React from "react";
import styled from "styled-components";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import CityTag from "../../components/CityTag/CityTag";
import TextInput from "../../components/Input/Input";
import Article from "../../components/Article/Article";
import NavButton from "../../components/NavButton/NavButton";

import useToast from "../../hooks/useToast";

import SlideFromSideButton from "../../components/SlideFromSideButton/SlideFromSideButton";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  height: auto;
`;

const Container = styled.div`
  margin: 50px;
  flex-wrap: wrap;
  max-width: 350px;
`;

const ComponentsShowOff = (props) => {
  const { Toast, isOpen, handleCloseToast, setToastState } = useToast();

  return (
    <Wrapper className="flexColumn">
      <Container className="flexRow">
        <NavButton text={"strona główna"} target={"/"} />
        <NavButton text={"poradniki"} target={"/tutorials"} />
        <NavButton text={"kontakt"} target={"/contact"} />
      </Container>
      <Container className="flexRow">
        <SlideFromSideButton>this is button</SlideFromSideButton>
      </Container>
      <Container>
        <ArrowButton />
      </Container>
      <Container className="flexRow">
        {" "}
        <TextInput placeholder={"Warszawa"} />
      </Container>

      <Container className="flexRow">
        <CityTag text={"Szczecin"} />
        <CityTag text={"Warszawa"} />
        <CityTag text={"Bydgoszcz"} />
        <CityTag text={"Gdynia"} />
        <CityTag text={"Koszalin"} />
        <CityTag text={"Stargard"} />
      </Container>
      <Container className="flexRow">
        {" "}
        <Article />
      </Container>

      <Container className="flexRow">
        {isOpen ? (
          <Toast
            isOpen={isOpen}
            handleClose={handleCloseToast}
            setModalState={setToastState}
            className="positive"
          >
            <h2>toast message</h2>
            <p>date</p>
          </Toast>
        ) : null}
      </Container>
    </Wrapper>
  );
};

ComponentsShowOff.propTypes = {};

export default ComponentsShowOff;
