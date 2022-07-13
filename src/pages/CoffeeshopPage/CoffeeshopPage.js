import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
  Wrapper,
  AboutSection,
  ContactSection,
  ImageSlider,
  MenuSection,
  CommentSection,
} from "./Coffeeshop.styles";
import screen from "./screen.png";
import axios from "axios";
import ArrowButton from "../../components/ArrowButton/ArrowButton";

const CoffeeshopPage = (props) => {
  const [response, setResponse] = useState(null);
  const params = useParams();
  console.log(params.coffeeshop);

  const url = `http://localhost:4500/coffeeshop/${params.coffeeshop}`;
  console.log(url);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setResponse(response.data.data);
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
      <ContactSection>
        <div className="address">
          <span>{response.street}</span>
          <span>{response.city}</span>
          <span>{response.website}</span>
        </div>
        <img src={screen}></img>
      </ContactSection>

      <MenuSection>menu</MenuSection>

      <CommentSection>Opinie</CommentSection>
    </Wrapper>
  ) : (
    <Wrapper></Wrapper>
  );
};

CoffeeshopPage.propTypes = {};

export default CoffeeshopPage;
