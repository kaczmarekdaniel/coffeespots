import styled from "styled-components";

export const SkeletonWrapper = styled.section`
  display: flex;
  flex-direction: row;
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

export const SkeletonElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 125px;
  margin: 15px 25px;
  position: relative;
  z-index: 5;
  background: whitesmoke;
  border-radius: 15px;
  overflow: hidden;

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
    justify-content: flex-start;
    align-items: flex-start;
    width: 300px;
    height: 250px;
    margin: 0 25px;
    animation: 2s loaderSkeleton infinite;
  }

  @keyframes loaderSkeleton {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const ImageSkeleton = styled.div`
  background: #c0c0c0;
  width: 100%;
  height: 175px;
`;

export const TitleSkeleton = styled.div`
  width: 75%;
  height: 35px;
  margin: 10px;
  background: #c0c0c0;
`;
