import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const useSignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      console.log("Button was clicked");

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log("this is res ========>", res);

      if (res?.error) {
        setError("Invalid credential");
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      console.log("Error", error);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    handleSubmit,
  };
};

export default useSignIn;
