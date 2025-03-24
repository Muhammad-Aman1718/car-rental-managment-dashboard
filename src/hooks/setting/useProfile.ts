import React, { useState } from "react";

const useProfile = () => {
  const [livesIn, setLivesIn] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  return {
    livesIn,
    setLivesIn,
    streetAddress,
    setStreetAddress,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
  };
};

export default useProfile;
