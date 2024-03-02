import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = () => {
    isOpen ? close() : open();
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggle,
    open,
    close,
  };
};
