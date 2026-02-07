import { IconArrowUpRight, IconBold } from "@tabler/icons-react";
import { Badge } from "orphos/badge";
import { buttonVariants } from "orphos/button";
import { Kbd } from "orphos/kbd";
import { Label } from "orphos/label";
import { Separator } from "orphos/separator";
import { SidebarInset, SidebarProvider } from "orphos/sidebar";
import { Spinner } from "orphos/spinner";
import { Textarea } from "orphos/textarea";
import { Toggle } from "orphos/toggle";
import { typographyVariants } from "orphos/typography";
import { useEffect } from "react";
import { AvatarDemo } from "../components/avatar";
import { BadgeDemo } from "../components/badge";
import { ButtonDemo, ButtonDisabledDemo } from "../components/button";
import { CardDemo } from "../components/card";
import { CheckboxDemo } from "../components/checkbox";
import { CodeBlock } from "../components/code-block";
import { ContextMenuDemo } from "../components/context-menu";
import { DialogDemo } from "../components/dialog";
import { DropdownDemo } from "../components/dropdown";
import { EmptyInputGroup } from "../components/empty";
import { FieldDemo } from "../components/field";
import { InputGroupDemo } from "../components/input-group";
import { KbdTooltip } from "../components/kbd";
import { ColorPalette } from "../components/palette";
import { PopoverDemo } from "../components/popover";
import RadioDemo from "../components/radio-group";
import { Section } from "../components/section";
import { SectionGroup } from "../components/section-group";
import { SelectDemo } from "../components/select";
import { SheetSide } from "../components/sheet";
import { AppSidebar } from "../components/sidebar/app-sidebar";
import { SiteHeader } from "../components/site-header";
import { SkeletonDemo } from "../components/skeleton";
import { SliderDemo } from "../components/slider";
import { SwitchDemo } from "../components/switch";
import { TabsDemo } from "../components/tabs";
import { ToastDemo } from "../components/toast";
import { TooltipDemo } from "../components/tooltip";
import { AppLink } from "../router";

const installSnippet = `npm install orphos\n# or\nbun add orphos`;
const peerDepsSnippet = `npm install react tailwindcss@^4`;
const setupSnippet = `@import "tailwindcss";\n@import "orphos/theme.css";\n@source "../node_modules/orphos/dist";`;
const usageSnippet = `import { Button } from "orphos/button";\n\nexport function SaveButton() {\n  return <Button variant="primary">Save changes</Button>;\n}`;
const portalMarkupSnippet = `<body>\n  <div className="root">\n    {children}\n  </div>\n</body>`;
const portalCssSnippet = `.root {\n  isolation: isolate;\n}`;
const iosCssSnippet = `body {\n  position: relative;\n}`;

function DocsPage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const anchor = window.location.hash.slice(1);
    if (!anchor) return;
    const element = document.getElementById(anchor);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <SidebarProvider sidebarWidthMobile="16rem">
      <AppSidebar />
      <SidebarInset>
        <SiteHeader active="docs" showSidebarTrigger />

        <main className="flex flex-1 overflow-auto p-6 md:p-8 lg:p-12">
          <div className="page-flow mx-auto flex w-full max-w-6xl flex-col gap-16">
            <section className="grid gap-10 border-b border-border-subtle pb-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs text-foreground-subtle">
                  <Badge variant="info">Docs</Badge>
                  <span>v0.50.0</span>
                </div>
                <div className="space-y-3">
                  <p className="eyebrow">Documentation</p>
                  <h1 className="text-[clamp(2.4rem,4.4vw,4.15rem)] font-semibold leading-[1.06] tracking-tight text-foreground">
                    Build with{" "}
                    <span className="bg-[linear-gradient(120deg,var(--color-primary),var(--color-info))] bg-clip-text text-transparent">
                      Orphos
                    </span>
                    .
                  </h1>
                  <p className="text-lg text-foreground-subtle">
                    Installation steps, design tokens, and component references
                    in one place. Jump in, explore the API, and ship quickly.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <AppLink
                    href="/docs#installation"
                    className={buttonVariants({
                      variant: "primary",
                      size: "lg",
                    })}>
                    Get started
                    <IconArrowUpRight />
                  </AppLink>
                  <AppLink
                    href="/docs#form-controls"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "lg",
                    })}>
                    Browse components
                  </AppLink>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-foreground-subtle">
                  {[
                    { label: "Installation", href: "/docs#installation" },
                    { label: "Tokens", href: "/docs#colors" },
                    { label: "Components", href: "/docs#form-controls" },
                  ].map((link) => (
                    <AppLink
                      key={link.label}
                      href={link.href}
                      className="rounded-full border border-border-subtle px-3 py-1 transition-colors hover:border-border-element hover:text-foreground">
                      {link.label}
                    </AppLink>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">
                    Install Orphos
                  </p>
                  <CodeBlock code={installSnippet} />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">
                    Add the theme
                  </p>
                  <CodeBlock code={setupSnippet} />
                </div>
              </div>
            </section>

            <SectionGroup
              title="Getting Started"
              description="Install the library, wire up the theme, and ship your first component."
              className="border-t-0 pt-0">
              <Section
                title="Installation"
                description="Add the package and peer dependencies.">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">
                      Library
                    </p>
                    <CodeBlock code={installSnippet} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">
                      Peer dependencies
                    </p>
                    <CodeBlock code={peerDepsSnippet} />
                  </div>
                </div>
              </Section>

              <Section
                title="Setup"
                description="Import the theme and ensure Tailwind scans the package.">
                <CodeBlock code={setupSnippet} />
              </Section>

              <Section
                title="Usage"
                description="Import components by path for tree-shaking-friendly builds.">
                <CodeBlock code={usageSnippet} />
              </Section>

              <Section
                title="Platform Notes"
                description="Portal stacking contexts and Safari visual viewport coverage.">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">
                        Portal stacking context
                      </p>
                      <p className="text-sm text-foreground-subtle">
                        Ensure portaled components render above app content.
                      </p>
                    </div>
                    <CodeBlock code={portalMarkupSnippet} />
                    <CodeBlock code={portalCssSnippet} />
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">
                        iOS 26+ Safari
                      </p>
                      <p className="text-sm text-foreground-subtle">
                        Backdrops should cover the visual viewport after scroll.
                      </p>
                    </div>
                    <CodeBlock code={iosCssSnippet} />
                  </div>
                </div>
              </Section>
            </SectionGroup>

            <SectionGroup
              title="Foundations"
              description="Core design tokens, colors, and typography helpers.">
              <Section
                title="Colors"
                description="Brand, surface, and text tokens from the theme.">
                <ColorPalette />
              </Section>

              <Section
                title="Typography"
                description="Heading scale, text styles, and list helpers.">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">
                      Headings
                    </p>
                    <div className="space-y-3">
                      <h1
                        className={typographyVariants({
                          variant: "heading-1",
                        })}>
                        Heading 1
                      </h1>
                      <h2
                        className={typographyVariants({
                          variant: "heading-2",
                          className: "mt-0!",
                        })}>
                        Heading 2
                      </h2>
                      <h3
                        className={typographyVariants({
                          variant: "heading-3",
                          className: "mt-0!",
                        })}>
                        Heading 3
                      </h3>
                      <h4
                        className={typographyVariants({
                          variant: "heading-4",
                          className: "mt-0!",
                        })}>
                        Heading 4
                      </h4>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">
                      Text styles
                    </p>
                    <p className={typographyVariants({ variant: "paragraph" })}>
                      The goal of typography is to relate font size, line
                      height, and line width in a proportional way that
                      maximizes beauty and makes reading easier and more
                      pleasant.
                    </p>
                    <blockquote
                      className={typographyVariants({
                        variant: "blockquote",
                        className: "mt-0!",
                      })}>
                      &ldquo;Styles come and go. Good design is a language, not
                      a style.&rdquo;
                    </blockquote>
                    <code className={typographyVariants({ variant: "code" })}>
                      npm install orphos
                    </code>
                    <div className="flex gap-2">
                      <Kbd>⌘</Kbd>
                      <Kbd>K</Kbd>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <p className="text-sm font-semibold text-foreground">Lists</p>
                  <div className="grid gap-8 md:grid-cols-2">
                    <ul className={typographyVariants({ variant: "ul" })}>
                      <li>Unordered list item 1</li>
                      <li>Unordered list item 2</li>
                      <li>Unordered list item 3</li>
                    </ul>
                    <ol className={typographyVariants({ variant: "ol" })}>
                      <li>Ordered list item 1</li>
                      <li>Ordered list item 2</li>
                      <li>Ordered list item 3</li>
                    </ol>
                  </div>
                </div>
              </Section>
            </SectionGroup>

            <SectionGroup
              title="Form Controls"
              description="Inputs, selections, and sliders for data entry.">
              <Section
                title="Button"
                description="Primary actions with size, icon, and variant options.">
                <div className="space-y-4">
                  <ButtonDemo />
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground-subtle">
                      Disabled states
                    </p>
                    <ButtonDisabledDemo />
                  </div>
                </div>
              </Section>

              <Section
                title="Input Group"
                description="Pair inputs with addons or inline actions.">
                <InputGroupDemo />
              </Section>

              <Section
                title="Select"
                description="Accessible select dropdowns built on Base UI.">
                <SelectDemo />
              </Section>

              <Section
                title="Checkbox"
                description="Binary choices with labels.">
                <CheckboxDemo />
              </Section>

              <Section
                title="Radio"
                description="Mutually exclusive options in a single group.">
                <RadioDemo />
              </Section>

              <Section title="Switch" description="Toggle a setting on or off.">
                <SwitchDemo />
              </Section>

              <Section
                title="Slider"
                description="Adjust numeric values across a range.">
                <SliderDemo />
              </Section>

              <Section
                title="Textarea"
                description="Multi-line inputs for longer responses.">
                <div className="grid w-full max-w-sm gap-1.5">
                  <Label htmlFor="message">Your message</Label>
                  <Textarea
                    placeholder="Type your message here..."
                    id="message"
                  />
                </div>
              </Section>

              <Section
                title="Field"
                description="Input wrapper for labels, hints, and validation.">
                <FieldDemo />
              </Section>
            </SectionGroup>

            <SectionGroup
              title="Data Display"
              description="Surface content and metadata in compact layouts.">
              <Section
                title="Avatar"
                description="User initials or images with fallback support.">
                <AvatarDemo />
              </Section>

              <Section
                title="Badge"
                description="Status and contextual labels.">
                <BadgeDemo />
              </Section>

              <Section
                title="Card"
                description="Flexible containers with header and footer slots.">
                <div className="max-w-md">
                  <CardDemo />
                </div>
              </Section>

              <Section title="Skeleton" description="Loading placeholders.">
                <SkeletonDemo />
              </Section>

              <Section
                title="Empty"
                description="Empty state messaging with optional actions.">
                <EmptyInputGroup />
              </Section>
            </SectionGroup>

            <SectionGroup
              title="Feedback"
              description="Communicate system status and loading states.">
              <Section
                title="Toast"
                description="Transient notifications for user actions.">
                <ToastDemo />
              </Section>

              <Section
                title="Spinner"
                description="Inline loading indicator for async actions.">
                <div className="flex items-center gap-4">
                  <Spinner className="size-4" />
                  <Spinner className="size-6" />
                  <Spinner className="size-8" />
                </div>
              </Section>
            </SectionGroup>

            <SectionGroup
              title="Overlays"
              description="Dialogs, popovers, and anchored menus.">
              <Section
                title="Dialog"
                description="Modal dialogs with backdrops.">
                <DialogDemo />
              </Section>

              <Section
                title="Sheet"
                description="Edge panels for navigation and workflows.">
                <SheetSide />
              </Section>

              <Section
                title="Popover"
                description="Floating panels anchored to a trigger.">
                <PopoverDemo />
              </Section>

              <Section
                title="Tooltip"
                description="Short hints on hover or focus.">
                <TooltipDemo />
              </Section>

              <Section
                title="Dropdown Menu"
                description="Action menus anchored to a trigger.">
                <DropdownDemo />
              </Section>

              <Section
                title="Context Menu"
                description="Right-click or long-press menus for actions.">
                <ContextMenuDemo />
              </Section>
            </SectionGroup>

            <SectionGroup
              title="Navigation"
              description="Switch between content views and sections.">
              <Section
                title="Tabs"
                description="Segmented navigation between views.">
                <TabsDemo />
              </Section>
            </SectionGroup>

            <SectionGroup
              title="Utilities"
              description="Small helpers for interaction and layout.">
              <Section title="Toggle" description="Icon or text-based toggles.">
                <div className="flex items-center gap-4">
                  <Toggle aria-label="Toggle bold">
                    <IconBold />
                  </Toggle>
                  <Toggle variant="soft" aria-label="Toggle bold">
                    <IconBold />
                    <span>Bold</span>
                  </Toggle>
                </div>
              </Section>

              <Section
                title="Kbd"
                description="Keyboard shortcut hints for commands.">
                <KbdTooltip />
              </Section>

              <Section
                title="Separator"
                description="Visual separation between content blocks.">
                <div className="flex h-8 items-center gap-4">
                  <span>Left</span>
                  <Separator orientation="vertical" />
                  <span>Right</span>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-4">
                  <span>Top</span>
                  <span>Bottom</span>
                </div>
              </Section>
            </SectionGroup>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export { DocsPage };
