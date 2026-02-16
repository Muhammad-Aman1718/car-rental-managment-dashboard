import { showToast } from "@/utils/showToast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useSignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      showToast("error", "All feilds are required");
      return;
    }

    if (!isChecked) {
      showToast("error", "Please, check the remember box");
      return;
    }

    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        showToast("error", "Please, Enter your correct user name and password");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
      showToast("success", "User sign-in successfully");
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    isChecked,
    setIsChecked,
    handleSubmit,
  };
};

export default useSignIn;
