// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request });

  // Dashboard protection
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/auth/signIn", request.url));
  }

  // Auth pages protection (if logged in)
  if (
    (pathname === "/auth/signIn" ||
      pathname === "/auth/signUp" ||
      pathname === "/") &&
    token
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/signIn", "/auth/signUp"],
};
