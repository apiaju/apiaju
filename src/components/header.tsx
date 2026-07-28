"use client";

import { Github, Menu, PackageIcon, ShapesIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link href={"/"} className="text-xl font-bold text-foreground">
              ApiAju
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/playground" rel="noopener noreferrer">
                <ShapesIcon className="h-4 w-4 mr-2" />
                Playground
              </Link>
            </Button>

            <Button asChild variant="ghost" size="sm">
              <Link href="/packages" rel="noopener noreferrer">
                <PackageIcon className="h-4 w-4 mr-2" />
                Pacotes
              </Link>
            </Button>

            <Button asChild variant="ghost" size="sm">
              <a
                href="https://github.com/apiaju/apiaju"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden flex flex-col gap-1 pb-4">
            <Button asChild variant="ghost" size="sm" className="justify-start">
              <Link
                href="/playground"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <ShapesIcon className="h-4 w-4 mr-2" />
                Playground
              </Link>
            </Button>

            <Button asChild variant="ghost" size="sm" className="justify-start">
              <Link
                href="/packages"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <PackageIcon className="h-4 w-4 mr-2" />
                Pacotes
              </Link>
            </Button>

            <Button asChild variant="ghost" size="sm" className="justify-start">
              <a
                href="https://github.com/apiaju/apiaju"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
