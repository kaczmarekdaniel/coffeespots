import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Success } from "./success.svg";

import PropTypes from "prop-types";
import { ToastWrapper, ToastMessage, ToastIcon } from "./Toast.styles";

const toastContainer = document.getElementById("toast-container");

const Toast = ({ className, children, handleClose, setModalState }) => {
  const toastNode = document.createElement("div");

  toastContainer.appendChild(toastNode);

  const animateSlideOut = (e) => {
    const element = e.target.parentElement.parentElement.classList;
    element.toggle("animateSlideOut");
    setTimeout(() => {
      handleClose();
      setModalState(false);
      element.toggle("animateSlideOut");
    }, 700);
  };

  return ReactDOM.createPortal(
    <ToastWrapper className={className}>
      <ToastIcon>
        {" "}
        <Success />
      </ToastIcon>

      <ToastMessage>
        {children}{" "}
        <button
          onClick={(e) => {
            animateSlideOut(e);
          }}
        >
          X
        </button>
      </ToastMessage>
    </ToastWrapper>,
    toastNode
  );
};

Toast.propTypes = {};

export default Toast;
