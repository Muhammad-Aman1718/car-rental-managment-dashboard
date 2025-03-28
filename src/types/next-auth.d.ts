import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email?: string;
    role?: "ADMIN" | "USER";
  }

  interface Session {
    user: User;
  }

  interface JWT {
    id: string;
    email?: string;
    role?: "ADMIN" | "USER";
  }
}
