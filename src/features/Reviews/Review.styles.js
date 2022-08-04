import styled from "styled-components";

export const ReviewsWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AddReview = styled.div`
  width: 250px;
  height: 45px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333436;

  input {
    content: "\f058";
  }
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid black;
  background: none;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    color: white;
    background: #333436;
  }
`;

export const AllReviews = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .allreviews {
    align-items: flex-end;
  }
`;

export const ProgressBar = styled.div.attrs(props => ({
  width: props.width || ""
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .label {
    color: grey;
    font-size: 16px;
  }
  .bar {
    width: 100px;
    margin: 3px;
    height: 10px;
    background: lightgray;
    overflow: hidden;
    border-radius: 5px;
    position: relative;
  }
  .bar::after {
    position: absolute;
    width: ${props => props.width + "px"};
    height: 100%;
    background: #333436;
    content: "";
    left: 0;
    top: 0;
  }
`;
