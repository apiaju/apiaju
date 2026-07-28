import { Calendar1, type LucideIcon } from "lucide-react";

export interface PackageInfo {
  name: string;
  npmName: string;
  version: string;
  description: string;
  icon: LucideIcon;
  npmUrl: string;
}

export const packages: PackageInfo[] = [
  {
    name: "Calendar",
    npmName: "@apiaju/calendar",
    version: "1.1.0",
    description:
      "Calendário de feriados de Aracaju-SE. Feriados nacionais, estaduais e municipais com suporte a timezone e dias úteis.",
    icon: Calendar1,
    npmUrl: "https://www.npmjs.com/package/@apiaju/calendar",
  },
];
