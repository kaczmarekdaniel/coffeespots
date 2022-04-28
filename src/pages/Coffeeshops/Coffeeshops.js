import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { coffeshops } from "../../services/mock-data/coffeeshops";
import Input from "../../components/Input/Input";
import SlideFromSideButton from "../../components/SlideFromSideButton/SlideFromSideButton";
import StickyFilters from "../../features/StickyFilters/StickyFilters";
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-top: 10vh;
  z-index: 1;
  flex-direction: column;
  p {
    color: black;
  }
`;
const FilterBox = styled.header`
  height: 300px;
  max-width: 900px;
  width: 100%;
  //background-color: #929fa5;

  @media screen and (min-width: 850px) {
    border-radius: 20px;
  }

  h1 {
    font-weight: 500;
  }
`;

const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  min-height: 700px;
  max-width: 1200px;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  transform: translateY(-20px);
  padding-top: 50px;

  @media screen and (min-width: 850px) {
    transform: translateY(0px);
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Coffeeshop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 125px;
  margin: 15px 25px;
  position: relative;
  z-index: 5;
  img {
    max-height: 100%;
    border-radius: 15px;
  }

  h1 {
    font-weight: 500;
    width: 100%;
  }

  p {
    width: 100%;
    font-weight: 300;
  }

  .basicInfo {
    text-align: left;
    margin: 5px 0 0 15px;
    width: 100%;
  }

  img::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: red;
    z-index: 10;
  }

  @media screen and (min-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    margin: 0 25px;
    img {
      max-width: 100%;
      max-height: 200px;

      z-index: 5;
    }
  }
`;

const Coffeeshops = (props) => {
  return (
    <Wrapper>
      <FilterBox className="flexColumn">
        <h1>Szukaj</h1>
        <Input type="text"></Input>
        <SlideFromSideButton className="searchButton" text={"szukaj"}>
          Szukaj
        </SlideFromSideButton>
        <button> zobacz wszystkie \/</button>
      </FilterBox>
      <StickyFilters />
      <ContentBox>
        {coffeshops.map((element) => (
          <Link to={element.urlName} style={{ textDecoration: "none" }}>
            <Coffeeshop key={element.name}>
              <img src={element.photo.url} alt={element.photo.alt} />
              <div className="flexColumn basicInfo">
                <h1>{element.name}</h1>
                <p>
                  {element.street}, {element.city}
                </p>
              </div>
            </Coffeeshop>
          </Link>
        ))}
      </ContentBox>
    </Wrapper>
  );
};

Coffeeshops.propTypes = {};

export default Coffeeshops;
