// "use client";
// import { users } from "@/store/slices/auth";
// import { useAppDispatch, useAppSelector } from "@/store/store";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import useModal from "./useModal";

// const useSignUp = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const { isOpen, setIsOpen } = useModal();
//   const handleSignUp = async () => {
//     if (!firstName || !lastName || !email || !password) {
//       alert("all fields are requried");
//       return;
//     }

//     const user = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//     };

//     await dispatch(users(user));
//     setIsOpen((isOpen = true));
//     console.log(isOpen);

//     router.push("/auth/signIn");
//     setIsOpen(false);

//     // alert("data is submitted");
//   };

//   return {
//     firstName,
//     setFirstName,
//     lastName,
//     setLastName,
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleSignUp,
//   };
// };

// export default useSignUp;

"use client";
import { users } from "@/store/slices/auth";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useModal from "./useModal";
import { showToast } from "@/utils/toast";

const useSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.authReducer.loading);

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !password) {
      alert("All fields are required");
      return;
    }

    const user = { firstName, lastName, email, password };

    try {
      const response = await dispatch(users(user)).unwrap();

      setTimeout(() => {
        showToast("success", "User sign-up successfully!");

        router.push("/auth/signIn");
      }, 2000);
    } catch (error) {
      console.error("Signup Failed:", error);
      alert(error);
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
    handleSignUp,
  };
};

export default useSignUp;
