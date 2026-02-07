import { buttonVariants } from "orphos/button";
import { SidebarTrigger } from "orphos/sidebar";
import { cn } from "orphos/utils";
import { AppLink } from "../router";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "Home", href: "/", key: "home" },
  { label: "Docs", href: "/docs", key: "docs" },
  { label: "Components", href: "/docs#form-controls", key: "components" },
  { label: "Tokens", href: "/docs#colors", key: "tokens" },
];

interface SiteHeaderProps {
  active: "home" | "docs";
  showSidebarTrigger?: boolean;
}

function SiteHeader({ active, showSidebarTrigger = false }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          {showSidebarTrigger ? (
            <SidebarTrigger className="md:hidden" />
          ) : null}
          <AppLink href="/" className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="text-sm font-semibold">O</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Orphos</span>
              <span className="text-xs text-foreground-subtle">
                Component Library
              </span>
            </div>
          </AppLink>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-foreground-subtle md:flex">
          {navItems.map((item) => {
            const isActive = item.key === active;
            return (
            <AppLink
              key={item.label}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "transition-colors hover:text-foreground",
                isActive ? "text-foreground font-medium" : ""
              )}>
              {item.label}
            </AppLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <AppLink
            href="/docs#installation"
            className={buttonVariants({ variant: "primary", size: "sm" })}>
            Get started
          </AppLink>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export { SiteHeader };
