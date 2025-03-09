// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email", placeholder: "your-email@example.com" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         // Dummy user data (Replace with database check)
//         const user = { id: "1", name: "John Doe", email: "john@example.com", password: "password123" };

//         if (credentials?.email === user.email && credentials?.password === user.password) {
//           return user;
//         }
//         return null; // Login failed
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login", // Custom login page
//   },
//   callbacks: {
//     async session({ session, token }) {
//       session.user.id = token.id;
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET, // Set this in your .env.local file
// };

// export default NextAuth(authOptions);

// "fdsadfd"

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {},
//       async authorize(credentials) {
//         const user = { id: "1" };
//         return user;
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   secrets: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/",
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import { prisma } from "@/config/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { AxiosError } from "axios";


const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required.");
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials?.email },
          });

          if (!user) {
            throw new Error("User not found.");
          }

          const passwordsMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );
        
          if (!passwordsMatch) {
            throw new Error("Invalid credentials. the password is not same");
          }

          return { id: user.id, email: user.email };
        } catch (error) {
          const errorAxois = error as AxiosError;
          throw new Error(
            errorAxois.message || "Something went wrong during authentication."
          );
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
