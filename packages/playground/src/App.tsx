import { Badge } from "orphos/badge";
import { IconBold } from "@tabler/icons-react";
import { Kbd } from "orphos/kbd";
import { Label } from "orphos/label";
import { Separator } from "orphos/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "orphos/sidebar";
import { Spinner } from "orphos/spinner";
import { Textarea } from "orphos/textarea";
import { Toggle } from "orphos/toggle";
import { typographyVariants } from "orphos/typography";
import { AvatarDemo } from "./components/avatar";
import { BadgeDemo } from "./components/badge";
import { ButtonDemo, ButtonDisabledDemo } from "./components/button";
import { CardDemo } from "./components/card";
import { CheckboxDemo } from "./components/checkbox";
import { ContextMenuDemo } from "./components/context-menu";
import { DialogDemo } from "./components/dialog";
import { DropdownDemo } from "./components/dropdown";
import { EmptyInputGroup } from "./components/empty";
import { FieldDemo } from "./components/field";
import { InputGroupDemo } from "./components/input-group";
import { KbdTooltip } from "./components/kbd";
import { ColorPalette } from "./components/pallete";
import { PopoverDemo } from "./components/popover";
import RadioDemo from "./components/radio-group";
import { Section } from "./components/section";
import { SelectDemo } from "./components/select";
import { SheetSide } from "./components/sheet";
import { AppSidebar } from "./components/sidebar/app-sidebar";
import { SkeletonDemo } from "./components/skeleton";
import { SliderDemo } from "./components/slider";
import { SwitchDemo } from "./components/switch";
import { TabsDemo } from "./components/tabs";
import { ThemeToggle } from "./components/theme-toggle";
import { ToastDemo } from "./components/toast";
import { TooltipDemo } from "./components/tooltip";

function App() {
  return (
    <SidebarProvider sidebarWidthMobile="16rem">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-4!" />
            <span className="font-medium text-sm">Component Library</span>
          </div>
          <ThemeToggle />
        </header>

        <main className="flex flex-1 flex-col gap-16 overflow-auto p-6 md:p-8 lg:p-12">
          {/* Hero Section */}
          <div className="max-w-3xl">
            <h1
              className={typographyVariants({
                variant: "heading-1",
              })}>
              Orphos Design System
            </h1>
            <p className="mt-2 text-foreground-subtle text-lg">
              A modern React UI component library built on Base UI and Tailwind
              CSS v4.
            </p>
            <div className="mt-4 flex gap-2">
              <Badge variant="success">v0.48.0</Badge>
              <Badge variant="info">React 19</Badge>
              <Badge variant="warning">Tailwind v4</Badge>
            </div>
          </div>

          {/* Color Palette */}
          <Section title="Colors">
            <ColorPalette />
          </Section>

          {/* Form Controls */}
          <div className="space-y-16">
            <h2
              className={typographyVariants({
                variant: "heading-1",
                className: "border-b pb-4 text-2xl!",
              })}>
              Form Controls
            </h2>

            <Section title="Button">
              <ButtonDemo />
              <div className="mt-4">
                <p className="mb-2 font-medium text-foreground-subtle text-sm">
                  Disabled States
                </p>
                <ButtonDisabledDemo />
              </div>
            </Section>

            <Section title="Input Group">
              <InputGroupDemo />
            </Section>

            <Section title="Select">
              <SelectDemo />
            </Section>

            <Section title="Checkbox">
              <CheckboxDemo />
            </Section>

            <Section title="Radio">
              <RadioDemo />
            </Section>

            <Section title="Switch">
              <SwitchDemo />
            </Section>

            <Section title="Slider">
              <SliderDemo />
            </Section>

            <Section title="Textarea">
              <div className="grid w-full max-w-sm gap-1.5">
                <Label htmlFor="message">Your message</Label>
                <Textarea placeholder="Type your message here..." id="message" />
              </div>
            </Section>

            <Section title="Field">
              <FieldDemo />
            </Section>
          </div>

          {/* Data Display */}
          <div className="space-y-16">
            <h2
              className={typographyVariants({
                variant: "heading-1",
                className: "border-b pb-4 text-2xl!",
              })}>
              Data Display
            </h2>

            <Section title="Avatar">
              <AvatarDemo />
            </Section>

            <Section title="Badge">
              <BadgeDemo />
            </Section>

            <Section title="Card">
              <div className="max-w-md">
                <CardDemo />
              </div>
            </Section>

            <Section title="Skeleton">
              <SkeletonDemo />
            </Section>

            <Section title="Empty">
              <EmptyInputGroup />
            </Section>
          </div>

          {/* Feedback */}
          <div className="space-y-16">
            <h2
              className={typographyVariants({
                variant: "heading-1",
                className: "border-b pb-4 text-2xl!",
              })}>
              Feedback
            </h2>

            <Section title="Toast">
              <ToastDemo />
            </Section>

            <Section title="Spinner">
              <div className="flex items-center gap-4">
                <Spinner className="size-4" />
                <Spinner className="size-6" />
                <Spinner className="size-8" />
              </div>
            </Section>
          </div>

          {/* Overlays */}
          <div className="space-y-16">
            <h2
              className={typographyVariants({
                variant: "heading-1",
                className: "border-b pb-4 text-2xl!",
              })}>
              Overlays
            </h2>

            <Section title="Dialog">
              <DialogDemo />
            </Section>

            <Section title="Sheet">
              <SheetSide />
            </Section>

            <Section title="Popover">
              <PopoverDemo />
            </Section>

            <Section title="Tooltip">
              <TooltipDemo />
            </Section>

            <Section title="Dropdown Menu">
              <DropdownDemo />
            </Section>

            <Section title="Context Menu">
              <ContextMenuDemo />
            </Section>
          </div>

          {/* Navigation */}
          <div className="space-y-16">
            <h2
              className={typographyVariants({
                variant: "heading-1",
                className: "border-b pb-4 text-2xl!",
              })}>
              Navigation
            </h2>

            <Section title="Tabs">
              <TabsDemo />
            </Section>
          </div>

          {/* Misc */}
          <div className="space-y-16">
            <h2
              className={typographyVariants({
                variant: "heading-1",
                className: "border-b pb-4 text-2xl!",
              })}>
              Miscellaneous
            </h2>

            <Section title="Toggle">
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

            <Section title="Kbd">
              <KbdTooltip />
            </Section>

            <Section title="Separator">
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
          </div>

          {/* Typography */}
          <div className="space-y-16">
            <h2
              className={typographyVariants({
                variant: "heading-1",
                className: "border-b pb-4 text-2xl!",
              })}>
              Typography
            </h2>

            <Section title="Headings">
              <div className="space-y-4">
                <h1 className={typographyVariants({ variant: "heading-1" })}>
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
            </Section>

            <Section title="Text Styles">
              <p className={typographyVariants({ variant: "paragraph" })}>
                The goal of typography is to relate font size, line height, and
                line width in a proportional way that maximizes beauty and makes
                reading easier and more pleasant.
              </p>
              <blockquote
                className={typographyVariants({
                  variant: "blockquote",
                  className: "mt-4",
                })}>
                &ldquo;Styles come and go. Good design is a language, not a
                style.&rdquo;
              </blockquote>
              <code className={typographyVariants({ variant: "code" })}>
                npm install orphos
              </code>
              <div className="mt-4 flex gap-2">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </div>
            </Section>

            <Section title="Lists">
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
            </Section>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export { App };
