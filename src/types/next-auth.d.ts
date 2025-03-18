import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;  // 👈 User object mein role add kar diya
  }

  interface Session {
    user?: {
      role?: string;  // 👈 Session user ke andar bhi role define kiya
    };
  }

  interface JWT {
    role?: string; // 👈 JWT token mein bhi role define kiya
  }
}
