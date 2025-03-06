"use client";
import { users } from "@/store/slices/userSlice";
import { useAppDispatch } from "@/store/store";
import { useState } from "react";

const useSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !password) {
      alert("all fields are requried");
      return;
    }

    await dispatch(
      users({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
    );

    alert("data is submitted");
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    handleSignUp,
  };
};

export default useSignUp;
