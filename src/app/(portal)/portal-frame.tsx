"use client";

import { usePathname } from "next/navigation";

const publicRoutes = [
  "/glossario",
  "/templates",
  "/fomento",
  "/oportunidades",
  "/trilhas",
  "/patentes",
  "/centros",
  "/busca"
];

export function PortalFrame({ appShell, publicShell }: { appShell: React.ReactNode; publicShell: React.ReactNode }) {
  const pathname = usePathname();
  const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));

  return isPublicRoute ? publicShell : appShell;
}
