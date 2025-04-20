import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const useSideBar = () => {
  const pathname = usePathname(); // Get current active route
  const { data: session } = useSession();

  const userRole = session?.user?.role;
  return {
    pathname,
    session,
    userRole,
  };
};

export default useSideBar;
