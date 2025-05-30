import { Badge } from "@theanalog/orphos/badge";
import { Button } from "@theanalog/orphos/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@theanalog/orphos/card";
import { Separator } from "@theanalog/orphos/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@theanalog/orphos/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@theanalog/orphos/tooltip";
import { typographyVariants } from "@theanalog/orphos/typography";
import { AvatarDemo } from "./components/avatar";
import { ButtonDisabledDemo, ButtonsDemo } from "./components/buttons";
import { CalloutDemo } from "./components/callout";
import { CheckboxDemo } from "./components/checkbox";
import { ContextMenuDemo } from "./components/context-menu";
import { DialogDemo } from "./components/dialog";
import { DropdownDemo } from "./components/dropdown";
import { IconButtonDemo } from "./components/icon-button";
import { ImageUploadDemo } from "./components/image-upload";
import { InputsDemo } from "./components/inputs";
import { ColorPalette } from "./components/pallete";
import { PopoverDemo } from "./components/popover";
import { SelectScrollable } from "./components/select";
import { SheetSide } from "./components/sheet";
import { AppSidebar } from "./components/sidebar/app-sidebar";
import { SkeletonDemo } from "./components/skeleton";
import { SliderDemo } from "./components/slider";
import { SwitchDemo } from "./components/switch";
import { TabsDemo } from "./components/tabs";
import { ToastDemo } from "./components/toast";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-20 overflow-auto p-6">
          <div>
            <h1
              className={typographyVariants({
                variant: "heading1",
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
                variant: "heading2",
                className: "mt-0!",
              })}>
              Avatar
            </h2>
            <div className="flex w-auto flex-row flex-wrap gap-4">
              <AvatarDemo />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading2",
                className: "mt-0!",
              })}>
              Badge
            </h2>
            <div className="flex w-auto flex-row flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="warning" soft>
                Warning
              </Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="info" soft>
                Info
              </Badge>
            </div>
          </div>
          <div className="flex w-auto flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading2",
                className: "mt-0!",
              })}>
              Button
            </h2>
            <ButtonsDemo />
            <ButtonDisabledDemo />
          </div>
          <div className="flex w-auto flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading2",
                className: "mt-0!",
              })}>
              Callout
            </h2>
            <div className="flex w-full max-w-xl flex-col gap-4">
              <CalloutDemo />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading2",
                className: "mt-0!",
              })}>
              Card
            </h2>
            <div className="flex w-auto flex-row gap-4">
              <Card className={"w-full max-w-[380px]"}>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>You have 3 unread messages.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Mark all as read</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading2",
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
                variant: "heading2",
                className: "mt-0!",
              })}>
              Dialog / Drawer
            </h2>
            <div className="flex w-full flex-col items-start gap-10">
              <DialogDemo />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading2",
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
                variant: "heading2",
                className: "mt-0!",
              })}>
              Form Components
            </h2>
            <div className="flex w-full max-w-4xl flex-col items-start gap-10">
              <ImageUploadDemo />
              <InputsDemo />
              <CheckboxDemo />
            </div>
          </div>
          <div className="flex w-auto flex-col items-start gap-6">
            <h2
              className={typographyVariants({
                variant: "heading2",
                className: "mt-0!",
              })}>
              Icon Button
            </h2>
            <IconButtonDemo />
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading2",
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
                variant: "heading2",
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
                variant: "heading2",
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
                variant: "heading2",
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
                variant: "heading2",
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
                variant: "heading2",
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
                variant: "heading2",
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
                variant: "heading2",
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
                variant: "heading2",
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
                variant: "heading2",
                className: "mt-0!",
              })}>
              Tooltip
            </h2>
            <div className="flex w-auto flex-row gap-4">
              <Tooltip delayDuration={0} open>
                <TooltipTrigger asChild>
                  <Button size="sm">Hover</Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={8} align="start">
                  <p>The quick brown fox jumps over the lazy dog.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2
              className={typographyVariants({
                variant: "heading2",
              })}>
              Typography
            </h2>
            <div className="flex w-auto flex-col gap-4">
              <h1
                className={typographyVariants({
                  variant: "heading1",
                })}>
                The principles of the typographic craft are difficult to master
              </h1>
              <h2
                className={typographyVariants({
                  variant: "heading2",
                  className: "mt-0!",
                })}>
                The principles of the typographic craft are difficult to master
              </h2>
              <h3
                className={typographyVariants({
                  variant: "heading3",
                  className: "mt-0!",
                })}>
                The principles of the typographic craft are difficult to master
              </h3>
              <h4
                className={typographyVariants({
                  variant: "heading4",
                  className: "mt-0!",
                })}>
                The principles of the typographic craft are difficult to master
              </h4>
              <h5
                className={typographyVariants({
                  variant: "heading5",
                  className: "mt-0!",
                })}>
                The principles of the typographic craft are difficult to master
              </h5>
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
              <kbd
                className={typographyVariants({
                  variant: "kbd",
                })}>
                Shift + Tab
              </kbd>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export { App };
