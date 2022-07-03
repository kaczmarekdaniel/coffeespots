import React, { useRef, useLayoutEffect } from "react";
import { useEffect } from "react/cjs/react.production.min";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  z-index: 100;
  display: flex;
  padding-top: 25px;
  justify-content: center;
  align-items: center;
`;

const StickyContainer = styled.div`
  width: 75%;
  height: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: white;
  z-index: 100;
  box-shadow: 0px 2px 50px rgba(17, 25, 33, 0.05);
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
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StickyFilters = ({ showFilters }) => {
  const stickyMenuRef = useRef();
  useLayoutEffect(() => {
    try {
      const stickyOffsetTop = stickyMenuRef.current.offsetTop - 100;
      document.addEventListener("scroll", () => {
        if (window.scrollY > stickyOffsetTop) {
          stickyMenuRef.current.classList.add("sticky");
        } else {
          stickyMenuRef.current.classList.remove("sticky");
        }
      });
    } catch {}
  }, []);

  return (
    <Wrapper>
      {showFilters ? (
        <>
          <StickyContainer ref={stickyMenuRef}>
            <Filters>
              <Dropdown>Miasta \/</Dropdown>
              <Dropdown>Udogodnienia \/</Dropdown>
            </Filters>
          </StickyContainer>
        </>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

StickyFilters.propTypes = {};

export default StickyFilters;
