import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import SlideFromSideButton from "../../components/SlideFromSideButton/SlideFromSideButton";
import StickyFilters from "../../features/StickyFilters/StickyFilters";
import axios from "axios";
import Filters from "../../features/Filters/Filters";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-top: 5vh;
  z-index: 1;
  flex-direction: column;
  p {
    color: black;
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
  const [showFilters, setShowFilters] = useState(true);
  const [places, setPlaces] = useState(null);

  const toggleState = (showFilters, setShowFilters) => {
    setShowFilters(!showFilters);
  };

  const url = "http://localhost:4500/coffeeshop";

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setPlaces(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formHandler = async () => {
    const data = {
      name: "Przystań na kawę",
      city: "Szczecin",
      urlName: "przystan-na-kawe-szcecin",
      street: "Rayskiego",
      photoURL:
        "https://bi.im-g.pl/im/0d/4b/16/z23378957IBG,Przystan-na-Kawe--nowy-lokal-przy-ul--Rayskiego-w-.jpg",

      website: "https://altcoffee.pl",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
    };
    try {
      const response = await axios.post(url, data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Filters />
      <ContentBox>
        {places != null ? (
          <>
            {places.map((element) => (
              <Link
                to={element.urlName}
                style={{ textDecoration: "none" }}
                key={element._id}
              >
                <Coffeeshop key={element.name}>
                  <img src={element.photoURL} />
                  <div className="flexColumn basicInfo">
                    <h1>{element.name}</h1>
                    <p>
                      {element.street}, {element.city}
                    </p>
                  </div>
                </Coffeeshop>
              </Link>
            ))}
          </>
        ) : (
          "loading..."
        )}
      </ContentBox>
    </Wrapper>
  );
};

Coffeeshops.propTypes = {};

export default Coffeeshops;
