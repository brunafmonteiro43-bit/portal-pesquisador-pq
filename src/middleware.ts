import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const sessionCookieNames = [
  "authjs.session-token",
  "__Secure-authjs.session-token",
  "next-auth.session-token",
  "__Secure-next-auth.session-token"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSessionCookie = sessionCookieNames.some((name) => request.cookies.has(name));

  if (!hasSessionCookie) {
    const loginUrl = new URL("/login", request.nextUrl);
    loginUrl.searchParams.set("callbackUrl", `${pathname}${request.nextUrl.search}`);

    if (pathname.startsWith("/chat")) {
      const intent = request.nextUrl.searchParams.get("intent");
      loginUrl.searchParams.set("message", intent === "use-atena" ? "atena-use" : "atena-chat");
    }

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/favoritos/:path*",
    "/chat/:path*",
    "/api/chat/:path*",
    "/admin/:path*"
  ]
};
