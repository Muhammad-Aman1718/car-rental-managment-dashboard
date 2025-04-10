import { useState } from "react";

const useDasboard = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  return {
    openForm,
    setOpenForm,
    handleOpenForm,
  };
};

export default useDasboard;
