import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const useSideBar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const userRole = session?.user?.role;
  return {
    pathname,
    session,
    userRole,
  };
};

export default useSideBar;
