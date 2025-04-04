import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { showToast } from "@/utils/showToast";
import { getUsersData, updateUsersData } from "@/store/slices/userData";

const useProfile = () => {
  const [livesIn, setLivesIn] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [postalcode, setPostalcode] = useState("");

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userDataReducer.userData);

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  const handleUpdateData = async () => {
    const updatedData: Record<string, string> = {};

    if (livesIn) updatedData.livesIn = livesIn;
    if (streetAddress) updatedData.streetAddress = streetAddress;
    if (dateOfBirth) updatedData.dateOfBirth = dateOfBirth;
    if (gender) updatedData.gender = gender;

    if (Object.keys(updatedData).length === 0) {
      showToast("error", "Please fill at least one field to update.");
      return;
    }
    await dispatch(updateUsersData(updatedData)).unwrap();

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
    postalcode,
    setPostalcode,
    userData,
    handleUpdateData,
  };
};

export default useProfile;
