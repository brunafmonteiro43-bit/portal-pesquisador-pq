export type AppRole =
  | "RESEARCHER"
  | "CENTER_MANAGER"
  | "INNOVATION_OFFICE"
  | "COCEN_ADMIN"
  | "SUPER_ADMIN";

const allRoles: AppRole[] = [
  "RESEARCHER",
  "CENTER_MANAGER",
  "INNOVATION_OFFICE",
  "COCEN_ADMIN",
  "SUPER_ADMIN"
];

const adminRoles: AppRole[] = ["COCEN_ADMIN", "SUPER_ADMIN"];

export const roleLabels: Record<AppRole, string> = {
  RESEARCHER: "Pesquisador",
  CENTER_MANAGER: "Gestor de Centro/Núcleo",
  INNOVATION_OFFICE: "Inovação",
  COCEN_ADMIN: "Administrador COCEN",
  SUPER_ADMIN: "Super admin"
};

export const navItems = [
  { href: "/dashboard", label: "Início", shortLabel: "Início", icon: "LayoutDashboard", roles: allRoles },
  { href: "/dashboard/glossario", label: "Glossário Facilitado", shortLabel: "Glossário", icon: "BookOpenText", roles: allRoles },
  { href: "/dashboard/modelos", label: "Modelos e Templates", shortLabel: "Templates", icon: "Files", roles: allRoles },
  { href: "/dashboard/centros", label: "Centros e Núcleos", shortLabel: "Centros", icon: "Building2", roles: allRoles },
  { href: "/dashboard/oportunidades", label: "Central de Oportunidades", shortLabel: "Oportunidades", icon: "CalendarDays", roles: allRoles },
  {
    href: "/dashboard/editais",
    label: "Fomento e Editais",
    shortLabel: "Fomento",
    icon: "Landmark",
    roles: ["RESEARCHER", "CENTER_MANAGER", "COCEN_ADMIN", "SUPER_ADMIN"] satisfies AppRole[]
  },
  {
    href: "/dashboard/trilhas",
    label: "Trilhas de Apoio",
    shortLabel: "Trilhas",
    icon: "GitBranch",
    roles: allRoles
  },
  {
    href: "/dashboard/patentes",
    label: "Patentes e Inovação",
    shortLabel: "Patentes",
    icon: "Lightbulb",
    roles: ["RESEARCHER", "INNOVATION_OFFICE", "COCEN_ADMIN", "SUPER_ADMIN"] satisfies AppRole[]
  },
  { href: "/dashboard/favoritos", label: "Meus Favoritos", shortLabel: "Favoritos", icon: "Star", roles: allRoles },
  { href: "/dashboard/duvidas", label: "Central de Dúvidas", shortLabel: "Dúvidas", icon: "CircleHelp", roles: allRoles },
  {
    href: "/dashboard/atena",
    label: "Atena",
    shortLabel: "Atena",
    icon: "Bot",
    roles: allRoles
  },
  { href: "/dashboard/gestao", label: "Gestão COCEN", shortLabel: "Gestão", icon: "ShieldCheck", roles: adminRoles }
];

export function canAccessPath(role: AppRole, pathname: string) {
  const route = navItems.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));
  return route ? route.roles.includes(role) : true;
}

export function canManageContent(role: AppRole) {
  return adminRoles.includes(role) || role === "INNOVATION_OFFICE";
}
