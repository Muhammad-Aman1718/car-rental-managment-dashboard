import { usersData } from "@/store/slices/userData";
import { useAppDispatch } from "@/store/store";
import { showToast } from "@/utils/showToast";
import React, { useState } from "react";

const useProfile = () => {
  const [livesIn, setLivesIn] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useAppDispatch();

  const handleUpdateData = async () => {
    if (!livesIn || !streetAddress || !dateOfBirth || !gender) {
      showToast("error", "All fields are requried");
      return;
    }
    const userData = { livesIn, streetAddress, dateOfBirth, gender };
    console.log("handle update data ====>  is clicked");
    await dispatch(usersData(userData)).unwrap();
  };

  return {
    livesIn,
    setLivesIn,
    streetAddress,
    setStreetAddress,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    handleUpdateData,
  };
};

export default useProfile;
