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

import { showToast } from "@/utils/toast";
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
      setLoading(true); // ✅ Show Loader
      console.log("Button was clicked");

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log("this is res ========>", res);

      if (res?.error) {
        // setError("Invalid credentials");
        showToast("error", "Please, Enter your correct user name and password");
        setLoading(false); // ❌ Stop Loader
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      console.log("Error", error);
      setLoading(false); // ❌ Stop Loader on Error
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
