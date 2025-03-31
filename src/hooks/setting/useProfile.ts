import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/store";
import { showToast } from "@/utils/showToast";
import { getUsersData, updateUsersData } from "@/store/slices/userData";

const useProfile = () => {
  const [livesIn, setLivesIn] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  const handleUpdateData = async () => {
    const userData = { livesIn, streetAddress, dateOfBirth, gender };
    console.log("handle update data ====>  is clicked");
    await dispatch(updateUsersData(userData)).unwrap();

    showToast("success", "User data added successfully!");

    setLivesIn("");
    setStreetAddress("");
    setDateOfBirth("");
    setGender("");

    dispatch(getUsersData());
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
