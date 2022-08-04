import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Rating } from "react-simple-star-rating";
import {
  ReviewsWrapper,
  AddReview,
  AllReviews,
  ProgressBar,
  SubmitButton
} from "./Review.styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import useToast from "../../hooks/useToast";

const Review = ({ reviews }) => {
  const [rating, setRating] = useState(0); // initial rating value
  const [allReviews, setAllReviews] = useState([...reviews]); // initial rating value
  const [average, setAverage] = useState(0);
  const [printAddReview, setPrintAddReview] = useState(true);
  const {
    Toast,
    isOpen,
    handleToastWithTimeout,
    handleCloseToast,
    setToastState
  } = useToast();

  const params = useParams();

  useEffect(() => {
    const sum = allReviews.reduce((partialSum, a) => partialSum + a, 0);
    const avg = (Math.round((sum / allReviews.length) * 100) / 100).toFixed(2);
    setAverage(avg);
  }, []);

  const handleRating = rate => {
    setRating(rate);
  };

  const formHandler = async () => {
    if (rating === 0) {
      return false;
    }
    const data = {
      review: rating / 20
    };
    const url = `http://localhost:4500/coffeeshop/${params.coffeeshop}`;

    try {
      const response1 = await axios.post(url, data);
      console.log(response1);
      allReviews.push(rating / 20);
      setPrintAddReview(false);
      handleToastWithTimeout();
    } catch (e) {
      console.log(e);
    }
  };

  const getInstances = num => {
    const count = allReviews.filter(x => x == num).length;
    console.log(count);
    return ((count / allReviews.length) * 100).toFixed(0);
  };

  return (
    <ReviewsWrapper>
      {printAddReview ? (
        <>
          <AddReview>
            <Rating
              emptyColor="#fff"
              onClick={handleRating}
              ratingValue={rating}
            />
          </AddReview>
          <SubmitButton onClick={formHandler}>add</SubmitButton>
        </>
      ) : (
        ""
      )}
      <AllReviews>
        <h1> {average}</h1>
        <p>of {allReviews.length} reviews</p>

        <div className="flexColumn allreviews">
          <ProgressBar width={getInstances(5)}>
            <span className="label">&#9734;&#9734;&#9734;&#9734;&#9734;</span>
            <div className="bar"></div>
          </ProgressBar>
          <ProgressBar width={getInstances(4)}>
            <span className="label">&#9734;&#9734;&#9734;&#9734;</span>
            <div className="bar"></div>
          </ProgressBar>
          <ProgressBar width={getInstances(3)}>
            <span className="label">&#9734;&#9734;&#9734;</span>
            <div className="bar"></div>
          </ProgressBar>
          <ProgressBar width={getInstances(2)}>
            <span className="label">&#9734;&#9734;</span>
            <div className="bar"></div>
          </ProgressBar>
          <ProgressBar width={getInstances(1)}>
            <span className="label">&#9734;</span> <div className="bar"></div>
          </ProgressBar>
        </div>
      </AllReviews>

      {isOpen ? (
        <Toast
          isOpen={isOpen}
          handleClose={handleCloseToast}
          setModalState={setToastState}
          className="positive"
        >
          <h2>Success</h2>
          <p>Review added</p>
        </Toast>
      ) : null}
    </ReviewsWrapper>
  );
};

Review.propTypes = {};

export default Review;
