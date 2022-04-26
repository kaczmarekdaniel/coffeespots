import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import CityTag from "../../components/CityTag/CityTag";
import Input from "../../components/Input/Input";
import SlideFromSideButton from "../../components/SlideFromSideButton/SlideFromSideButton";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: 30vh;
  z-index: 10;
  color: white;
  padding: 3% 0;
  .cities {
    margin: 25px 0 25px 0;
    max-width: 700px;
    min-height: 10vh;
    height: auto;
    flex-wrap: wrap;
  }

  .background {
    position: absolute;
    overflow: hidden;
    top: 0;
    background: red;
    width: 100vw;
    height: 100%;
    background-color: #333436;
  }

  .background:before {
    position: absolute;
    top: 0;
    left: -5vw;
    width: calc(110vw);
    height: 100%;
    content: "";
    background-color: #929fa5;
    z-index: 5;
    transform: rotate(-10deg);
  }
`;

const LandingPageCitySearch = () => {
  const citiesRef = useRef();
  const allCityTags = useRef();
  const [inputValue, setInputValue] = useState(null);
  let cityTags = [];

  useEffect(() => {
    allCityTags.current = citiesRef.current.querySelectorAll("div");
  }, []);

  useEffect(() => {
    console.log(inputValue);
    allCityTags.current.forEach((element) => {
      const textContent = element.innerText.toLowerCase();
      if (textContent.includes(inputValue)) {
        element.style.display = "flex";
      } else if (inputValue === null) {
        return "";
      } else {
        element.style.display = "none";
      }
    });
  }, [inputValue]);

  return (
    <Wrapper className="flexColumn">
      <div className="background" />
      <Input
        placeholder={"Znajdź swoje miasto"}
        setInputValue={setInputValue}
      />
      <div className="flexRow cities" ref={citiesRef}>
        <CityTag text={"Szczecin"} />
        <CityTag text={"Warszawa"} />
        <CityTag text={"Bydgoszcz"} />
        <CityTag text={"Gdynia"} />
        <CityTag text={"Koszalin"} />
        <CityTag text={"Stargard"} />
        <CityTag text={"Bydgoszcz"} />
        <CityTag text={"Gdynia"} />
        <CityTag text={"Koszalin"} />
        <CityTag text={"Stargard"} />
        <CityTag text={"Gdynia"} />
        <CityTag text={"Koszalin"} />
        <CityTag text={"Stargard"} />
      </div>
      <SlideFromSideButton>Pokaz wyniki</SlideFromSideButton>
    </Wrapper>
  );
};

LandingPageCitySearch.propTypes = {};

export default LandingPageCitySearch;
