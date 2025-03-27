import { prisma } from "@/config/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { AxiosError } from "axios";

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
          return { id: user.id, email: user.email, role: user.role };
        } catch (error) {
          const errorAxois = error as AxiosError;
          throw new Error(
            errorAxois.message || "Something went wrong during authentication."
          );
        }
      },
    }),
  ],
  // cookies: {
  //   sessionToken: {
  //     name: `next-auth.session-token`, //    `__Secure-next-auth.session-token`      in production time
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: false, //     process.env.NODE_ENV === "production" // Ye automatically false ho jayega
  //     },
  //   },
  // },
  pages: {
    signIn: "/auth/signIn",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email ?? undefined;
        session.user.role = token.role as "ADMIN" | "USER";
      }
      return session;
    },
  },
};

export default authOptions;
