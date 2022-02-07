import React from "react";
import styled from "styled-components";
import CityTag from "../../components/CityTag/CityTag";
import Input from "../../components/Input/Input";
import SlideFromSideButton from "../../components/SlideFromSideButton/SlideFromSideButton";
import ArrowButton from "../../components/ArrowButton/ArrowButton";
import Article from "../../components/Article/Article";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: auto;
  z-index: 5;
`;

const LandingPageFirstSection = styled.div`
  height: auto;
  min-height: 70vh;
  width: 100%;
  padding-top: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const WelcomeTextAndImage = styled.div`
  height: auto;
  min-height: 300px;
  width: 100%;
  display: flex;
`;

const Text = styled.div`
  width: auto;
  color: #333436;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #b8b0a9;
  background: #333436;
  padding: 0 10% 0 5%;
  h1 {
    margin-bottom: 10px;
    font-size: 46px;
    line-height: 1;
  }
`;

const Image = styled.div`
  width: auto;
  height: auto;
  background-color: darkgray;
  display: flex;
  img {
    width: 700px;
  }
`;

const AppQuickAccess = styled.div`
  min-height: 25vh;
  height: auto;
  width: 95%;
  flex-wrap: wrap;
  .container {
    height: auto%;
    width: 100%;
    text-align: center;
    padding: 0 5% 0 5%;
  }

  div h1 {
    font-size: 46px;
    line-height: 1;
    min-width: 300px;
  }

  div p {
    font-size: 16px;
    line-height: 1;
  }

  @media screen and (min-width: 950px) {
    .container {
      height: 100%;
      width: 30%;
      padding: 0%;
      text-align: left;
    }
  }
`;

const LandingPageSecondSection = styled.div`
  width: 100%;
  position: relative;
  min-height: 30vh;
  z-index: 10;
  color: white;
  padding: 5%;
  .cities {
    margin: 25px 0 25px 0;
    max-width: 700px;
    height: auto;
    flex-wrap: wrap;
  }

  .background {
    position: absolute;
    overflow: hidden;
    top: 0;
    background: red;
    width: calc(100vw - 20px);
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

const LandingPageThirdSection = styled.div`
  height: auto;
  width: 100%;
  padding: 2%;
  .title {
    font-size: 48px;
  }

  .container {
    margin: 50px 0 25px 0;
  }
`;

const LandingPage = (props) => {
  return (
    <Wrapper className="flexColumn">
      <LandingPageFirstSection>
        <WelcomeTextAndImage>
          <Text>
            <h1>Poznawaj nowe kawiarnie w twojej okolicy</h1>
            <p>
              Lorem ipsum sin dolor amet Lorem ipsum sin dolor amet Lorem ipsum
              sin dolor amet Lorem ipsum sin dolor amet Lorem ipsum sin dolor
              amet
            </p>
          </Text>
          <Image>
            <img
              src="https://images.unsplash.com/photo-1438824086897-500332bf6e9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
              alt=""
            />
          </Image>
        </WelcomeTextAndImage>
        <AppQuickAccess className="flexRow">
          <div className="flexColumn container">
            <h1>Zacznij swoją przygodę z kawą</h1>
          </div>
          <div className="flexColumn container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              libero et nulla luctus facilisis rutrum ac odio. Vivamus suscipit
              diam vel sem tincidunt, eget pharetra magna sollicitudin. Praesent
              iaculis elementum dui a commodo.
            </p>
          </div>
          <div className="flexColumn container">
            <ArrowButton>Pokaz poradniki </ArrowButton>
          </div>
        </AppQuickAccess>
      </LandingPageFirstSection>
      <LandingPageSecondSection className="flexColumn">
        <div className="background" />
        <Input placeholder={"Znajdź swoje miasto"} />
        <div className="flexRow cities">
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
      </LandingPageSecondSection>
      <LandingPageThirdSection className="flexColumn">
        <h1 className="title">Poradniki</h1>
        <div className="flexRow container">
          <Article />
          <Article />
          <Article />
        </div>
        <ArrowButton>Zobacz wszystkie </ArrowButton>
      </LandingPageThirdSection>
    </Wrapper>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
