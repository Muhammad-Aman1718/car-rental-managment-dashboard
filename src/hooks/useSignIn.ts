// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const useSignIn = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async () => {
//     try {
//       console.log("Button was clicked");

//       const res = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       });
//       console.log("this is res ========>", res);

//       if (res?.error) {
//         setError("Invalid credential");
//         return;
//       }

//       router.replace("/dashboard");
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };
//   return {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     error,
//     setError,
//     handleSubmit,
//   };
// };

// export default useSignIn;

import { showToast } from "@/utils/showToast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useSignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Add Loading State

  const handleSubmit = async () => {
    if (!email || !password) {
      showToast("error", "All feilds are required");
      return;
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      showToast(
        "error",

        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
          ? "Please enter a valid email address!"
          : "Password must be at least 8 characters long, contain uppercase, lowercase, number, and a special character!"
      );
      return;
    }

    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log("this is res ========>", res);

      if (res?.error) {
        showToast("error", "Please, Enter your correct user name and password");
        setLoading(false);
        return;
      }

      router.replace("/dashboard");
      showToast("success", "User sign-in successfully");
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,

    handleSubmit,
    loading,
  };
};

export default useSignIn;
