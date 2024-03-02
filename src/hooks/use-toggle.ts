import { useState } from "react";

type UseToggleProps = {
  initialState?: boolean;
};
export const useToggle = ({ initialState = false }: UseToggleProps) => {
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
