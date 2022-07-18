import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 100vh;
  padding-top: 120px;
  z-index: 5;
`;

export const AboutSection = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 24px;
    letter-spacing: 0.1px;
  }
  p {
    text-align: left;
    margin-top: 20px;
  }
  section {
    height: 65%;
    width: 50%;
  }
  .basicInfo {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 0 0 5vw;
  }

  .buttonWrapper {
    margin-top: 35px;
    button {
      width: 150px;
      height: 45px;
      font-size: 16px;
      font-weight: bold;
      background: none;
      cursor: pointer;
      border: 2px solid #333436;

      background: #333436;
      color: white;

      &:hover {
        background: white;
        color: #333436;
      }

      &:hover {
        background: white;
      }
    }
    button:last-of-type {
      background: white;
      color: #333436;
      margin-left: 15px;

      &:hover {
        background: #333436;
        color: white;
      }
    }
  }
`;

export const ImageSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  background: #b8b0a9;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35vh;
  padding: 20px;
  margin-bottom: 50px;
  img {
    max-height: 100%;
    cursor: pointer;
  }
  .address {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 100%;
  }
`;

export const Address = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0 1px black;
  padding: 1px;
`;

export const Reviews = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightblue;
`;
