import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, setIsOpen, handleOpen };
};

export default useModal;
