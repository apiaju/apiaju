import type { Metadata } from "next";
import { PackageCard } from "@/components/package-card";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Pacotes | ApiAju",
  description:
    "Pacotes Node.js do ecossistema ApiAju para usar nativamente em seus projetos, sem depender de chamadas HTTP.",
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      <main>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Pacotes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Além da API pública, disponibilizamos pacotes Node.js para você
              usar nativamente em seus projetos, sem depender de chamadas HTTP.
            </p>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.npmName}
                name={pkg.name}
                npmName={pkg.npmName}
                version={pkg.version}
                description={pkg.description}
                npmUrl={pkg.npmUrl}
                icon={<pkg.icon className="h-6 w-6" />}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
