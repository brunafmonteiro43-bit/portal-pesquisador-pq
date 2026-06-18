import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "@/lib/auth.config";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,

  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },

      async authorize(rawCredentials) {
        const credentials = credentialsSchema.safeParse(rawCredentials);

        if (!credentials.success) {
          return null;
        }

        const { email, password } = credentials.data;

        if (
          process.env.DEMO_AUTH === "true" &&
          email === "admin@cocen.unicamp.br" &&
          password === "portal-pq"
        ) {
          return {
            id: "demo-admin",
            name: "Administrador PQ",
            email,
            image: null,
          };
        }

        return null;
      },
    }),
  ],
});
