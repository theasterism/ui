import {
  IconArrowUpRight,
  IconSettings,
  IconStack2,
  IconTicket,
} from "@tabler/icons-react";
import { Badge } from "orphos/badge";
import { Button, buttonVariants } from "orphos/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "orphos/card";
import { Input } from "orphos/input";
import { Label } from "orphos/label";
import { typographyVariants } from "orphos/typography";
import { CodeBlock } from "../components/code-block";
import { SiteHeader } from "../components/site-header";
import { AppLink } from "../router";

const installSnippet = `npm install orphos\n# or\nbun add orphos`;
const peerDepsSnippet = `npm install react tailwindcss@^4`;
const setupSnippet = `@import "tailwindcss";\n@import "orphos/theme.css";\n@source "../node_modules/orphos/dist";`;

const highlights = [
  {
    title: "Composable primitives",
    description:
      "Base UI underpinnings with sensible defaults and ergonomic APIs.",
    icon: IconStack2,
  },
  {
    title: "Themeable tokens",
    description:
      "Color, typography, and radius tokens that stay consistent across surfaces.",
    icon: IconSettings,
  },
  {
    title: "Production ready",
    description:
      "Accessible components with dark mode, motion, and state coverage.",
    icon: IconTicket,
  },
];

function HomePage() {
  return (
    <div className="min-h-svh">
      <SiteHeader active="home" />

      <main className="page-flow mx-auto w-full max-w-6xl px-6 pb-20 pt-10 lg:pt-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="info">Component Library</Badge>
              <Badge variant="success">v0.50.0</Badge>
              <Badge variant="warning">Tailwind v4</Badge>
            </div>
            <div className="space-y-4">
              <p className="eyebrow">Orphos UI</p>
              <h1 className="text-[clamp(2.7rem,4.9vw,4.9rem)] font-semibold leading-[1.04] tracking-tight text-foreground">
                Ship{" "}
                <span className="bg-[linear-gradient(120deg,var(--color-primary),var(--color-info))] bg-clip-text text-transparent">
                  polished interfaces
                </span>{" "}
                without rebuilding the basics.
              </h1>
              <p className="text-lg text-foreground-subtle">
                Orphos delivers a cohesive component library and design tokens
                tuned for modern React apps. Start fast, keep consistency, and
                evolve with confidence.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <AppLink
                href="/docs#installation"
                className={buttonVariants({ variant: "primary", size: "lg" })}>
                Get started
                <IconArrowUpRight />
              </AppLink>
              <AppLink
                href="/docs"
                className={buttonVariants({ variant: "ghost", size: "lg" })}>
                Browse docs
              </AppLink>
            </div>
            <div className="grid gap-3 border-t border-border-subtle pt-4 text-xs text-foreground-subtle sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                React 19 ready
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                Base UI primitives
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                Token-first styling
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_top,_color-mix(in_oklch,_var(--color-primary-subtle)_60%,_transparent)_0%,_transparent_60%)] opacity-80 blur-3xl" />
            <Card className="relative overflow-hidden bg-background-element">
              <CardHeader className="space-y-2">
                <CardTitle>Invite your team</CardTitle>
                <CardDescription>
                  Create a shared workspace and start building with Orphos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="workspace">Workspace</Label>
                  <Input id="workspace" placeholder="Studio team" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" placeholder="Product designer" />
                </div>
                <Button variant="primary" className="w-full">
                  Send invite
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-20 space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="eyebrow">Highlights</p>
              <h2
                className={typographyVariants({
                  variant: "heading-2",
                  className: "mt-0!",
                })}>
                Everything you need to build faster.
              </h2>
            </div>
            <AppLink
              href="/docs#usage"
              className="text-sm text-foreground-subtle hover:text-foreground">
              See the usage guide
            </AppLink>
          </div>
          <div className="grid gap-6 border-t border-border-subtle pt-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full border border-border-subtle bg-background-subtle text-foreground">
                    <item.icon className="size-4" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                </div>
                <p className="text-sm text-foreground-subtle">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="eyebrow">Quick start</p>
              <h2
                className={typographyVariants({
                  variant: "heading-2",
                  className: "mt-0!",
                })}>
                Go from install to first component in minutes.
              </h2>
              <p className="text-sm text-foreground-subtle">
                Install the package, import the theme, and you are ready to ship.
              </p>
            </div>
            <ol className="space-y-6 border-l border-border-subtle pl-6">
              <li className="relative space-y-2 pl-2">
                <span className="absolute -left-[14px] top-2 size-2 rounded-full bg-primary" />
                <p className="text-sm font-semibold text-foreground">
                  1. Install Orphos
                </p>
                <CodeBlock code={installSnippet} />
              </li>
              <li className="relative space-y-2 pl-2">
                <span className="absolute -left-[14px] top-2 size-2 rounded-full bg-primary" />
                <p className="text-sm font-semibold text-foreground">
                  2. Install peer dependencies
                </p>
                <CodeBlock code={peerDepsSnippet} />
              </li>
              <li className="relative space-y-2 pl-2">
                <span className="absolute -left-[14px] top-2 size-2 rounded-full bg-primary" />
                <p className="text-sm font-semibold text-foreground">
                  3. Add the theme
                </p>
                <CodeBlock code={setupSnippet} />
              </li>
              <li className="relative space-y-2 pl-2">
                <span className="absolute -left-[14px] top-2 size-2 rounded-full bg-primary" />
                <p className="text-sm font-semibold text-foreground">
                  4. Browse components
                </p>
                <AppLink
                  href="/docs#form-controls"
                  className={buttonVariants({ variant: "primary", size: "sm" })}>
                  Explore components
                </AppLink>
              </li>
            </ol>
          </div>
          <div className="space-y-8 lg:border-l lg:border-border-subtle lg:pl-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">
                Component preview
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm" variant="primary">
                  Primary
                </Button>
                <Button size="sm" variant="ghost">
                  Ghost
                </Button>
                <Button size="sm" variant="link">
                  Link
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-foreground-subtle">
                <Badge variant="success">Primary</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="warning">Warning</Badge>
                <span>Buttons, badges, and tokens unified.</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <AppLink
                  href="/docs#form-controls"
                  className={buttonVariants({ variant: "primary", size: "sm" })}>
                  Browse components
                </AppLink>
                <AppLink
                  href="/docs#usage"
                  className={buttonVariants({ variant: "ghost", size: "sm" })}>
                  Usage guide
                </AppLink>
              </div>
            </div>
            <div className="space-y-3 border-t border-border-subtle pt-6">
              <p className="text-sm font-semibold text-foreground">
                What’s included
              </p>
              <div className="grid gap-3 text-sm text-foreground-subtle">
                <div className="flex items-center justify-between">
                  <span>Form controls</span>
                  <span className="text-foreground">10+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Data display</span>
                  <span className="text-foreground">8+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Overlays</span>
                  <span className="text-foreground">6+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Navigation</span>
                  <span className="text-foreground">4+</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export { HomePage };
