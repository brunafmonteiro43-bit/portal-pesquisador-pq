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
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/glossario/:path*",
    "/templates/:path*",
    "/centros/:path*",
    "/oportunidades/:path*",
    "/favoritos/:path*",
    "/fomento/:path*",
    "/trilhas/:path*",
    "/patentes/:path*",
    "/faq/:path*",
    "/chat/:path*",
    "/admin/:path*"
  ]
};
