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
import { showToast } from "@/utils/showToast";

const useSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<"USER" | "ADMIN">("USER");
  const [isRoleOpen, setIsRoleOpen] = useState(false);
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
    setIsRoleOpen(true);
    // if (
    //   !/^[A-Za-z]+$/.test(firstName) ||
    //   !/^[A-Za-z]+$/.test(lastName) ||
    //   !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ||
    //   !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    //     password
    //   )
    // ) {
    //   showToast(
    //     "error",
    //     !/^[A-Za-z]+$/.test(firstName)
    //       ? "First name should only contain alphabets!"
    //       : !/^[A-Za-z]+$/.test(lastName)
    //       ? "Last name should only contain alphabets!"
    //       : !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    //       ? "Please enter a valid email address!"
    //       : "Password must be at least 8 characters long, contain uppercase, lowercase, number, and a special character!"
    //   );
    //   return;
    // }

    const user = { firstName, lastName, email, password, selectedRole };

    try {
      await dispatch(users(user)).unwrap();

      setTimeout(() => {
        showToast("success", "User sign-up successfully!");

        router.push("/auth/signIn");
      }, 2000);
    } catch (error) {
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
    isRoleOpen,
    setIsRoleOpen,
    isChecked,
    setIsChecked,
    handleSignUp,
  };
};

export default useSignUp;
