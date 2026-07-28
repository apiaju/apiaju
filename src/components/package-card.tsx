"use client";

import { Check, Copy } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Badge } from "./ui/badge";

interface PackageCardProps {
  name: string;
  npmName: string;
  version: string;
  description: string;
  npmUrl: string;
  icon: ReactNode;
}

export function PackageCard({
  name,
  npmName,
  version,
  description,
  npmUrl,
  icon,
}: PackageCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(npmName);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="group relative flex flex-col gap-4 p-6 rounded-xl border bg-card shadow-sm transition-all hover:shadow-lg hover:border-primary/50">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 text-primary bg-primary-foreground rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <Badge variant="outline">v{version}</Badge>
      </div>
      <div className="space-y-2 flex-1">
        <h3 className="text-xl font-bold">
          <a
            href={npmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0"
          >
            {name}
          </a>
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="relative z-10 flex items-center justify-between gap-2 rounded-md border bg-muted/50 px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-muted-foreground/10"
      >
        <span className="truncate">{npmName}</span>
        {copied ? (
          <Check className="h-4 w-4 shrink-0 text-green-600" />
        ) : (
          <Copy className="h-4 w-4 shrink-0" />
        )}
      </button>
    </div>
  );
}
