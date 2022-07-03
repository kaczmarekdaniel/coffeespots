import { useState } from "react";
import Toast from "../features/Toast/Toast";
const useToast = (initialState = true) => {
  const [isOpen, setToastState] = useState(initialState);

  const handleOpenToast = () => setToastState(true);
  const handleCloseToast = () => setToastState(false);

  return {
    Toast,
    isOpen,
    handleOpenToast,
    handleCloseToast,
    setToastState,
  };
};

export default useToast;
