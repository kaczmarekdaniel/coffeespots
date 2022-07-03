import styled from "styled-components";
import Success from "./success.svg";
export const ToastWrapper = styled.div`
  animation: slideIn 0.7s;

  width: 400px;
  height: auto;
  min-height: 100px;
  border-radius: 5px;
  position: fixed;
  bottom: 20px;
  left: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #f0f0f0;
  overflow: hidden;
  &.negative {
  }

  &.animateSlideOut {
    animation: slideOut 0.7s;
  }
`;

export const ToastIcon = styled.div`
  width: 25%;
  height: auto;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5% 0 5% 10%;
`;

export const ToastMessage = styled.div`
  width: 75%;
  height: auto;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10%;
  flex-direction: column;
  h2 {
    font-size: 24px;
    font-weight: lighter;
    font-family: Arial, Helvetica, sans-serif;
  }
  p {
  }

  button {
    position: absolute;
    top: 15px;
    right: 20px;
    font-weight: bold;
    border: none;
    font-size: 15px;
    background: transparent;
    cursor: pointer;
    z-index: 100;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(-500px);
    }

    80% {
      transform: translateX(5px);
    }

    100% {
      transform: translateX(0px);
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-500px);
    }
  }
`;
