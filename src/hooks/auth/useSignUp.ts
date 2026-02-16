"use client";
import { users } from "@/store/slices/auth";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { showToast } from "@/utils/showToast";
import { AxiosError } from "axios";

const useSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<"USER" | "ADMIN">("USER");
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.authReducer.loading);

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !password) {
      showToast("error", "All fields are requried");
      return;
    }
    if (!isChecked) {
      showToast("error", "Please, check the remember me");
      return;
    }

    const user = { firstName, lastName, email, password, selectedRole };

    try {
      await dispatch(users(user)).unwrap();

      setTimeout(() => {
        showToast("success", "User sign-up successfully!");

        router.push("/auth/signIn");
      }, 2000);
    } catch (error) {
      const axiosError = error as AxiosError;
      let errorMessage = "Something went wrong. Please try again.";

      if (axiosError?.message) {
        errorMessage = axiosError.message; 
      }

      showToast("error", errorMessage);
      console.error("Signup Failed:", error);
    }
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
    loading,
    selectedRole,
    setSelectedRole,
    isChecked,
    setIsChecked,
    handleSignUp,
  };
};

export default useSignUp;
