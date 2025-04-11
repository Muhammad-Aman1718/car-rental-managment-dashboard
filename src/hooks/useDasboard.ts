import { useState } from "react";

const useDasboard = () => {
  const [openForm, setOpenForm] = useState(false);


  return {
    openForm,
    setOpenForm,
  };
};

export default useDasboard;
