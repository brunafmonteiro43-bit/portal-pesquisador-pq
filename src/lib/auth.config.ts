import type { NextAuthConfig } from "next-auth";
import type { AppRole } from "@/lib/permissions";

export const authConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login"
  },
  providers: [],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role ?? "RESEARCHER";
        token.centerId = user.centerId ?? null;
      }

      return token;
    },
    session({ session, token }) {
      if (session.user) {
        const role = typeof token.role === "string" ? (token.role as AppRole) : "RESEARCHER";
        const centerId = typeof token.centerId === "string" ? token.centerId : null;

        session.user.id = token.sub ?? "";
        session.user.role = role;
        session.user.centerId = centerId;
      }

      return session;
    }
  }
} satisfies NextAuthConfig;
