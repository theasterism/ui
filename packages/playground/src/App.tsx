/** biome-ignore-all lint/correctness/useUniqueElementIds: shut up! */
/** biome-ignore-all lint/a11y/useValidAnchor: shut up! */

import { Badge } from "orphos/badge";
import { BoldIcon } from "orphos/icons";
import { Kbd } from "orphos/kbd";
import { Separator } from "orphos/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "orphos/sidebar";
import { Toggle } from "orphos/toggle";
import { typographyVariants } from "orphos/typography";
import { AvatarDemo } from "./components/avatar";
import { BadgeDemo } from "./components/badge";
import { ButtonDisabledDemo, ButtonDemo } from "./components/button";
import { CardDemo } from "./components/card";
import { CheckboxDemo } from "./components/checkbox";
import { ContextMenuDemo } from "./components/context-menu";
import { DialogDemo } from "./components/dialog";
import { DropdownDemo } from "./components/dropdown";
import { FieldChoiceCard, FieldDemo } from "./components/fieldset";
import { IconButtonDemo } from "./components/icon-button";
import { InputsDemo } from "./components/inputs";
import { ItemDemo } from "./components/item";
import { KbdTooltip } from "./components/kbd";
import { PopoverDemo } from "./components/popover";
import { SelectScrollable } from "./components/select";
import { SheetSide } from "./components/sheet";
import { AppSidebar } from "./components/sidebar/app-sidebar";
import { SkeletonDemo } from "./components/skeleton";
import { SliderDemo } from "./components/slider";
import { SwitchDemo } from "./components/switch";
import { TabsDemo } from "./components/tabs";
import { ToastDemo } from "./components/toast";
import { TooltipDemo } from "./components/tooltip";
import { EmptyInputGroup } from "./components/empty";
import { AlertDialogDemo } from "./components/alert-dialog";
import { InputGroupDemo } from "./components/input-group";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-20 overflow-auto p-6">
          <div>
            <h1
              className={typographyVariants({
                variant: "heading-1",
                className: "mt-12",
              })}>
              Orphos Design System
            </h1>
            <hr className="my-4" />
            <div className="flex gap-2">
              <Badge variant="warning">Work In Progress.</Badge>
              <Badge variant="info">v0</Badge>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Alert Dialog
            </h2>
            <div className="flex w-auto flex-row flex-wrap gap-4">
              <AlertDialogDemo />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Avatar
            </h2>
            <div className="flex w-auto flex-row flex-wrap gap-4">
              <AvatarDemo />
            </div>
          </div>
          <div className="flex w-auto flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Badge
            </h2>
            <BadgeDemo />
          </div>
          <div className="flex w-auto flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Button
            </h2>
            <ButtonDemo />
            <ButtonDisabledDemo />
          </div>
          <div className="flex w-auto flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Card
            </h2>
            <div className="flex w-full max-w-xl flex-col gap-4">
              <CardDemo />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Context Menu
            </h2>
            <div className="flex w-full flex-col items-start gap-10">
              <ContextMenuDemo />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Dialog
            </h2>
            <div className="flex w-full flex-col items-start gap-10">
              <DialogDemo />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Dropdown Menu
            </h2>
            <div className="flex w-full flex-col items-start gap-10">
              <DropdownDemo />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Empty
            </h2>
            <div className="flex w-full flex-col items-start gap-10">
              <EmptyInputGroup />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Field
            </h2>
            <div className="flex w-full max-w-4xl flex-col items-start gap-10">
              <FieldDemo />
              <FieldChoiceCard />
            </div>
          </div>
          <div className="flex w-auto flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Icon Button
            </h2>
            <IconButtonDemo />
          </div>
          <div className="flex w-auto flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Input Group
            </h2>
            <InputGroupDemo />
          </div>
          <div className="flex w-auto flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Item
            </h2>
            <ItemDemo />
          </div>
          <div className="flex w-auto flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Kbd
            </h2>
            <KbdTooltip />
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Popover
            </h2>
            <div className="flex w-auto flex-row gap-4">
              <PopoverDemo />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Select
            </h2>
            <div className="flex w-auto flex-row gap-4">
              <SelectScrollable />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Separator
            </h2>
            <div className="flex w-auto flex-row gap-4">
              <Separator />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Sheet
            </h2>
            <div className="flex w-auto flex-row gap-4">
              <SheetSide />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Skeleton
            </h2>
            <div className="flex w-auto flex-row gap-4">
              <SkeletonDemo />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Slider
            </h2>
            <div className="flex w-auto flex-row gap-4">
              <SliderDemo />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Switch
            </h2>
            <div className="flex w-auto flex-row gap-4">
              <SwitchDemo />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Tabs
            </h2>
            <div className="flex w-auto flex-row gap-4">
              <TabsDemo />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Toast
            </h2>
            <div className="flex items-center gap-4">
              <ToastDemo />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Toggle
            </h2>
            <div className="flex items-center gap-4">
              <Toggle aria-label="Toggle bold">
                <BoldIcon className="h-4 w-4" />
              </Toggle>
              <Toggle variant="soft" aria-label="Toggle bold">
                <BoldIcon className="h-4 w-4" />
                <span> Bold</span>
              </Toggle>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
                className: "mt-0!",
              })}>
              Tooltip
            </h2>
            <div className="flex w-auto flex-row gap-4">
              <TooltipDemo />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading-2",
              })}>
              Typography
            </h2>
            <div className="flex w-auto flex-col gap-4">
              <h1
                className={typographyVariants({
                  variant: "heading-1",
                })}>
                The principles of the typographic craft are difficult to master
              </h1>
              <h2
                className={typographyVariants({
                  variant: "heading-2",
                  className: "mt-0!",
                })}>
                The principles of the typographic craft are difficult to master
              </h2>
              <h3
                className={typographyVariants({
                  variant: "heading-3",
                  className: "mt-0!",
                })}>
                The principles of the typographic craft are difficult to master
              </h3>
              <h4
                className={typographyVariants({
                  variant: "heading-4",
                  className: "mt-0!",
                })}>
                The principles of the typographic craft are difficult to master
              </h4>
              <p
                className={typographyVariants({
                  variant: "paragraph",
                  className: "mt-0!",
                })}>
                The goal of typography is to relate font size, line height, and
                line width in a proportional way that maximizes beauty and makes
                reading easier and more pleasant.
              </p>
              <blockquote
                className={typographyVariants({
                  variant: "blockquote",
                  className: "mt-6",
                })}>
                Styles come and go. Good design is a language, not a style
              </blockquote>
              <ul
                className={typographyVariants({
                  variant: "ul",
                })}>
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners : 20 gold coins</li>
              </ul>
              <ol
                className={typographyVariants({
                  variant: "ol",
                })}>
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners : 20 gold coins</li>
              </ol>
              <code
                className={typographyVariants({
                  variant: "code",
                })}>
                console.log()
              </code>
              <Kbd>Tab</Kbd>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export { App };
