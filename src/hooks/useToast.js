import { useState } from "react";
import Toast from "../features/Toast/Toast";
const useToast = (initialState = false) => {
  const [isOpen, setToastState] = useState(initialState);

  const handleOpenToast = () => setToastState(true);
  const handleCloseToast = () => setToastState(false);

  const handleToastWithTimeout = () => {
    handleOpenToast();
    setTimeout(() => {
      handleCloseToast();
    }, 1000);
  };

  return {
    Toast,
    isOpen,
    handleOpenToast,
    handleCloseToast,
    setToastState,
    handleToastWithTimeout
  };
};

export default useToast;
