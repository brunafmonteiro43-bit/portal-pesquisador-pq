"use client";

import { signIn } from "next-auth/react";
import { LockKeyhole, Mail } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedCallbackUrl = searchParams.get("callbackUrl");
  const loginMessage = searchParams.get("message");
  const callbackUrl =
    requestedCallbackUrl && requestedCallbackUrl.startsWith("/") && !requestedCallbackUrl.startsWith("//")
      ? requestedCallbackUrl
      : "/dashboard";
  const [email, setEmail] = useState("admin@cocen.unicamp.br");
  const [password, setPassword] = useState("portal-pq");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    setLoading(false);

    if (result?.error) {
      setError("Credenciais invalidas ou servico de autenticacao indisponivel.");
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
          PQ
        </div>
        <CardTitle className="text-2xl">Portal do Pesquisador</CardTitle>
        <p className="text-sm text-muted-foreground">COCEN/UNICAMP</p>
      </CardHeader>
      <CardContent>
        {loginMessage === "atena-chat" || loginMessage === "atena-use" || loginMessage === "atena" ? (
          <div className="mb-4 rounded-md border border-accent/20 bg-accent/5 px-4 py-3 text-sm font-medium text-accent">
            {loginMessage === "atena-use"
              ? "A Atena é uma ferramenta exclusiva para usuários autenticados."
              : "Faça login para conversar com a Atena."}
          </div>
        ) : null}
        <form className="space-y-4" onSubmit={onSubmit}>
          <label className="block space-y-2 text-sm font-medium">
            <span>Email</span>
            <span className="relative block">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-10" value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
            </span>
          </label>
          <label className="block space-y-2 text-sm font-medium">
            <span>Senha</span>
            <span className="relative block">
              <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-10"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
              />
            </span>
          </label>
          <Button className="w-full" type="submit" disabled={loading}>
            Entrar
          </Button>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
        </form>
      </CardContent>
    </Card>
  );
}
