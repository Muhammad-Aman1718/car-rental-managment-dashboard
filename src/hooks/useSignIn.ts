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
