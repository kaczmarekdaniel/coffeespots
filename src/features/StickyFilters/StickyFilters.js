import React, { useRef, useLayoutEffect } from "react";
import { useEffect } from "react/cjs/react.production.min";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  z-index: 100;
`;

const StickyContainer = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: 1px solid rebeccapurple;
  &.sticky {
    position: fixed;
    top: 100px;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`;

const Filters = styled.div`
  width: 75%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Dropdown = styled.div`
  width: 220px;
  height: 55px;
  background: #f0f0f0;
  margin: 0 10px;
  border: 1px solid black;
`;

const StickyFilters = (props) => {
  const stickyMenuRef = useRef();

  useLayoutEffect(() => {
    const stickyOffsetTop = stickyMenuRef.current.offsetTop - 100;
    document.addEventListener("scroll", (event) => {
      if (window.scrollY > stickyOffsetTop) {
        stickyMenuRef.current.classList.add("sticky");
      } else {
        stickyMenuRef.current.classList.remove("sticky");
      }
    });
  }, []);

  return (
    <Wrapper>
      <StickyContainer ref={stickyMenuRef}>
        <Filters>
          <Dropdown>Miasta</Dropdown>
          <Dropdown>Udogodnienia</Dropdown>
        </Filters>
      </StickyContainer>
    </Wrapper>
  );
};

StickyFilters.propTypes = {};

export default StickyFilters;
