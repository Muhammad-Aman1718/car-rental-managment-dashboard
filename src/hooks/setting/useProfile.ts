import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { showToast } from "@/utils/showToast";
import { getUsersData, updateUsersData } from "@/store/slices/userData";

const useProfile = () => {
  const [livesIn, setLivesIn] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userDataReducer.userData);

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  const handleUpdateData = async () => {
    const userData = { livesIn, streetAddress, dateOfBirth, gender };
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
    userData,
    handleUpdateData,
  };
};

export default useProfile;
