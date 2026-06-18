import type { DefaultSession } from "next-auth";
import type { AppRole } from "@/lib/permissions";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: AppRole;
      centerId?: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    role?: AppRole;
    centerId?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: AppRole;
    centerId?: string | null;
  }
}
