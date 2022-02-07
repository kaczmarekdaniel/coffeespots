import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  margin: 0 25px 0 25px;

  h1 {
    font-size: 32px;
    font-weight: 500;
    cursor: pointer;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const Image = styled.div`
  height: 60%;
  width: 100%;
  cursor: pointer;
  background: transparent;
  background-size: contain;
  backround-repeat: no-repeat;
  background-position: bottom;
  background-image: url(https://cdn.shopify.com/s/files/1/0156/2456/products/Coffee-Supreme_Aeropress_180x.png?v=1593739641);
`;

const Article = (props) => {
  return (
    <Wrapper>
      <Image />
      <h1>
        {" "}
        <u>Aeropress</u>
      </h1>
      <p>
        Czasami najprostsze rozwiązania są najlepsze. Dokładnie tak jest w
        przypadku AeroPressu – urządzenia stworzonego w 2005 roku przez
        amerykańskiego konstruktora zabawek, Alana Adlera.
      </p>
    </Wrapper>
  );
};

export default Article;
