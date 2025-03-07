"use client";
import { users } from "@/store/slices/auth";
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

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    await dispatch(users(user));

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
