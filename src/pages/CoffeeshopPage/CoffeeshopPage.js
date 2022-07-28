import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
  Wrapper,
  AboutSection,
  BottomSection,
  ImageSlider,
  Address,
  ReviewsWrapper,
  AddReview,
  AllReviews,
  ProgressBar,
} from "./Coffeeshop.styles";
import Input from "../../components/Input/Input";
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
      <BottomSection>
        <ReviewsWrapper>
          <AddReview>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </AddReview>
          <AllReviews>
            <div className="score">4,6</div>
            <div className="flexColumn">
              <ProgressBar>
                <span className="label">5</span> <div className="bar"></div>
              </ProgressBar>
              <ProgressBar>
                <span className="label">4</span> <div className="bar"></div>
              </ProgressBar>
              <ProgressBar>
                <span className="label">3</span>
                <div className="bar"></div>
              </ProgressBar>
              <ProgressBar>
                <span className="label">2</span> <div className="bar"></div>
              </ProgressBar>
              <ProgressBar>
                <span className="label">1</span> <div className="bar"></div>
              </ProgressBar>
            </div>
          </AllReviews>
        </ReviewsWrapper>
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
