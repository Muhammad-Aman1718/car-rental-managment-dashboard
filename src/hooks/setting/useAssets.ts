import { useState } from "react";

const useAssets = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => {
    console.log("button click");
    console.log("button click", openForm);

    setOpenForm(!openForm);
  };

  return {
    openForm,
    setOpenForm,
    handleOpenForm,
  };
};

export default useAssets;
