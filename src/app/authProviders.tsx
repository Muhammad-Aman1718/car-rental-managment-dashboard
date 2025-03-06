"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AuthProviderPropsTypes {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderPropsTypes> = ({
  children,
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
