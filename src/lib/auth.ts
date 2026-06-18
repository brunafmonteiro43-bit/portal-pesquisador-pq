import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import type { Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "@/lib/auth.config";
import { prisma } from "@/lib/prisma";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

function demoUser(email: string, password: string) {
  if (process.env.DEMO_AUTH !== "true") {
    return null;
  }

  if (email !== "admin@cocen.unicamp.br" || password !== "portal-pq") {
    return null;
  }

  return {
    id: "demo-admin",
    name: "Administrador PQ",
    email,
    image: null,
    role: "SUPER_ADMIN" as const,
    centerId: "demo-cocen"
  };
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: process.env.DEMO_AUTH === "true" ? undefined : (PrismaAdapter(prisma) as unknown as Adapter),,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(rawCredentials) {
        const credentials = credentialsSchema.safeParse(rawCredentials);

        if (!credentials.success) {
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.data.email }
          });

          if (!user?.passwordHash) {
            return demoUser(credentials.data.email, credentials.data.password);
          }

          const passwordMatches = await bcrypt.compare(credentials.data.password, user.passwordHash);

          if (!passwordMatches) {
            return null;
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
            centerId: user.centerId
          };
        } catch {
          return demoUser(credentials.data.email, credentials.data.password);
        }
      }
    })
  ]
});
