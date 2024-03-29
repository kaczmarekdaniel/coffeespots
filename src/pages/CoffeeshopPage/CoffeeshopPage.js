import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
  Wrapper,
  AboutSection,
  BottomSection,
  ImageSlider,
  Address
} from "./Coffeeshop.styles";
import Input from "../../components/Input/Input";
import Review from "../../features/Reviews/Review";

import screen from "./screen.png";
import axios from "axios";
import ArrowButton from "../../components/ArrowButton/ArrowButton";

const CoffeeshopPage = props => {
  const [response, setResponse] = useState(null);
  const params = useParams();
  console.log(params.coffeeshop);

  const url = `http://localhost:4500/coffeeshop/${params.coffeeshop}`;
  console.log(url);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setResponse(response.data.data);
      console.log(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return response != null ? (
    <Wrapper className="flexColumn">
      <AboutSection className="flexRow">
        <section className="basicInfo">
          <h1>{response.name}</h1>
          <h2>{response.street}</h2>
          <p>{response.about}</p>
          <div className="buttonWrapper">
            <button>Menu</button>
            <button>Kontakt</button>
          </div>
        </section>
        <section className="flexColumn">
          <ImageSlider></ImageSlider>
        </section>
      </AboutSection>

      <BottomSection>
        <Review reviews={response.reviews} />
        <Address>
          <div className="flexColumn address">
            <span>{response.street}</span>
            <span>{response.city}</span>
            <span>{response.website}</span>
          </div>
          <img src={screen} alt=""></img>
        </Address>
      </BottomSection>
    </Wrapper>
  ) : (
    <Wrapper></Wrapper>
  );
};

CoffeeshopPage.propTypes = {};

export default CoffeeshopPage;
