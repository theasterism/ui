import { Badge } from "@theanalog/orphos/badge";
import { Button } from "@theanalog/orphos/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@theanalog/orphos/card";
import { Separator } from "@theanalog/orphos/separator";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@theanalog/orphos/tooltip";
import { typographyVariants } from "@theanalog/orphos/typography";
import { AvatarDemo } from "./components/avatar";
import { ButtonDisabledDemo, ButtonsDemo } from "./components/buttons";
import { CalloutDemo } from "./components/callout";
import { CheckboxDemo } from "./components/checkbox";
import { DialogDemo } from "./components/dialog";
import { DropdownDemo } from "./components/dropdown";
import { IconButtonDemo } from "./components/icon-button";
import { InputsDemo } from "./components/inputs";
import { ColorPalette } from "./components/pallete";
import { SkeletonDemo } from "./components/skeleton";
import { TabsDemo } from "./components/tabs";
import { ToastDemo } from "./components/toast";

function App() {
  return (
    <section className="flex flex-col mx-auto grow w-full shrink basis-[0] gap-20 px-6 md:px-8 pt-0 pb-12 h-full overflow-y-auto">
      <div>
        <h1
          className={typographyVariants({
            variant: "heading1",
            className: "mt-12",
          })}
        >
          Orphos Design System
        </h1>
        <hr className="my-4" />
        <div className="flex gap-2">
          <Badge variant="warning">Work In Progress.</Badge>
          <Badge variant="info">v0</Badge>
        </div>
      </div>
      <ColorPalette />
      <div className="flex flex-col gap-6">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Avatar
        </h2>
        <div className="flex flex-row flex-wrap gap-4 w-auto">
          <AvatarDemo />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Badge
        </h2>
        <div className="flex flex-row flex-wrap gap-4 w-auto">
          <Badge>Badge</Badge>
          <Badge variant="primary">Badge</Badge>
          <Badge variant="info">Badge</Badge>
          <Badge variant="warning">Badge</Badge>
          <Badge variant="destructive">Badge</Badge>
          <Badge variant="success">Badge</Badge>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-auto items-start">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Button
        </h2>
        <ButtonsDemo />
        <ButtonDisabledDemo />
      </div>
      <div className="flex flex-col gap-6 w-auto items-start">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Callout
        </h2>
        <div className="flex flex-col gap-4 w-full max-w-xl">
          <CalloutDemo />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Card
        </h2>
        <div className="flex flex-row gap-4 w-auto">
          <Card className={"w-[380px]"}>
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
      <div className="flex flex-col gap-6 items-start w-full">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Dialog
        </h2>
        <div className="flex flex-col gap-10 items-start w-full">
          <DialogDemo />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start w-full">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Dropdown Menu
        </h2>
        <div className="flex flex-col gap-10 items-start w-full">
          <DropdownDemo />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start w-full">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Form Components
        </h2>
        <div className="flex flex-col gap-10 items-start w-full max-w-4xl">
          <InputsDemo />
          <CheckboxDemo />
        </div>
      </div>
      <div className="flex flex-col gap-6 w-auto items-start">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Icon Button
        </h2>
        <IconButtonDemo />
      </div>
      <div className="flex flex-col gap-6">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Separator
        </h2>
        <div className="flex flex-row gap-4 w-auto">
          <Separator />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Skeleton
        </h2>
        <div className="flex flex-row gap-4 w-auto">
          <SkeletonDemo />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Tabs
        </h2>
        <div className="flex flex-row gap-4 w-auto">
          <TabsDemo />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Toast
        </h2>
        <div className="flex flex-row gap-4 w-auto">
          <ToastDemo />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2
          className={typographyVariants({
            variant: "heading2",
            className: "mt-0!",
          })}
        >
          Tooltip
        </h2>
        <div className="flex flex-row gap-4 w-auto">
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button size="sm">Hover</Button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={8} align="start">
              <p>The quick brown fox jumps over the lazy dog.</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2
          className={typographyVariants({
            variant: "heading2",
          })}
        >
          Typography
        </h2>
        <div className="flex flex-col gap-4 w-auto">
          <h1
            className={typographyVariants({
              variant: "heading1",
            })}
          >
            The principles of the typographic craft are difficult to master
          </h1>
          <h2
            className={typographyVariants({
              variant: "heading2",
              className: "mt-0!",
            })}
          >
            The principles of the typographic craft are difficult to master
          </h2>
          <h3
            className={typographyVariants({
              variant: "heading3",
              className: "mt-0!",
            })}
          >
            The principles of the typographic craft are difficult to master
          </h3>
          <h4
            className={typographyVariants({
              variant: "heading4",
              className: "mt-0!",
            })}
          >
            The principles of the typographic craft are difficult to master
          </h4>
          <p
            className={typographyVariants({
              variant: "paragraph",
              className: "mt-0!",
            })}
          >
            The goal of typography is to relate font size, line height, and line width in a proportional way that
            maximizes beauty and makes reading easier and more pleasant.
          </p>
          <blockquote
            className={typographyVariants({
              variant: "blockquote",
              className: "mt-6",
            })}
          >
            Styles come and go. Good design is a language, not a style
          </blockquote>
          <ul
            className={typographyVariants({
              variant: "ul",
            })}
          >
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <ol
            className={typographyVariants({
              variant: "ol",
            })}
          >
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ol>
          <code
            className={typographyVariants({
              variant: "code",
            })}
          >
            console.log()
          </code>
          <kbd
            className={typographyVariants({
              variant: "kbd",
            })}
          >
            Shift + Tab
          </kbd>
        </div>
      </div>
    </section>
  );
}

export { App };
