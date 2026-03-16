import { buttonVariants } from "orphos/button";
import { SidebarTrigger } from "orphos/sidebar";
import { cn } from "orphos/utils";
import { AppLink } from "../router";

const navItems = [
  { label: "Home", href: "/", key: "home" },
  { label: "Docs", href: "/docs/installation", key: "docs" },
  { label: "Components", href: "/docs/button", key: "components" },
  { label: "Tokens", href: "/docs/colors", key: "tokens" },
];

interface SiteHeaderProps {
  active: "home" | "docs";
  showSidebarTrigger?: boolean;
}

function SiteHeader({ active, showSidebarTrigger = false }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-border-subtle/70 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-350 items-center justify-between px-3 py-3 md:px-5">
        <div className="flex items-center gap-3">
          {showSidebarTrigger ? <SidebarTrigger className="md:hidden" /> : null}
          <AppLink href="/" className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="font-semibold text-sm">O</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Orphos</span>
              <span className="text-foreground-subtle text-xs">
                Component Library
              </span>
            </div>
          </AppLink>
        </div>

        <nav className="hidden items-center gap-6 text-foreground-subtle text-sm md:flex">
          {navItems.map((item) => {
            const isActive = item.key === active;
            return (
              <AppLink
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "transition-colors hover:text-foreground",
                  isActive ? "font-medium text-foreground" : ""
                )}>
                {item.label}
              </AppLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <AppLink
            href="/docs/installation"
            className={buttonVariants({ variant: "primary", size: "sm" })}>
            Get started
          </AppLink>
        </div>
      </div>
    </header>
  );
}

export { SiteHeader };
