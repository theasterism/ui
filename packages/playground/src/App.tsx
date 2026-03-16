/** biome-ignore-all lint/correctness/useUniqueElementIds: shut up! */
/** biome-ignore-all lint/a11y/useValidAnchor: shut up! */

import { IconBold } from "@tabler/icons-react";
import { Badge } from "orphos/badge";
import { Kbd } from "orphos/kbd";
import { Separator } from "orphos/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "orphos/sidebar";
import { Toggle } from "orphos/toggle";
import { AvatarDemo } from "./components/avatar";
import { BadgeDemo } from "./components/badge";
import { ButtonDemo } from "./components/button";
import { CardDemo } from "./components/card";
import { CheckboxDemo } from "./components/checkbox";
import { ContextMenuDemo } from "./components/context-menu";
import { DialogDemo } from "./components/dialog";
import { DropdownDemo } from "./components/dropdown";
import { EmptyInputGroup } from "./components/empty";
import { FieldDemo } from "./components/field";
import { InputsDemo } from "./components/inputs";
import { KbdTooltip } from "./components/kbd";
import { PopoverDemo } from "./components/popover";
import RadioDemo from "./components/radio-group";
import { AppSidebar } from "./components/sidebar/app-sidebar";
import { SkeletonDemo } from "./components/skeleton";
import { SliderDemo } from "./components/slider";
import { SwitchDemo } from "./components/switch";
import { TabsDemo } from "./components/tabs";
import { ToastDemo } from "./components/toast";
import { TooltipDemo } from "./components/tooltip";
import { ThemeToggle } from "./components/theme-toggle";

function App() {
  return (
    <SidebarProvider className="h-svh overflow-hidden">
      <AppSidebar />
      <SidebarInset>
        <div className="flex min-h-0 flex-1 flex-col">
          <header className="flex h-14 shrink-0 items-center gap-2 sticky top-0 inset-x-0 border-b border-border-subtle/60">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger />
              <ThemeToggle />
            </div>
          </header>
          <div className="min-h-0 flex-1 overflow-y-auto flex flex-col gap-16 px-6 py-10">
            <div>
              <div className="prose">
                <h1>Orphos Design System</h1>
              </div>
              <hr className="my-4" />
              <div className="flex gap-2">
                <Badge variant="warning">Work In Progress.</Badge>
                <Badge variant="info">v0</Badge>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Avatar</h2>
              </div>
              <div className="flex w-auto flex-row flex-wrap gap-4">
                <AvatarDemo />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Badge</h2>
              </div>
              <div className="flex w-auto flex-row flex-wrap gap-4">
                <BadgeDemo />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Button</h2>
              </div>
              <div className="flex w-auto flex-row flex-wrap gap-4">
                <ButtonDemo />
              </div>
            </div>
            <div className="flex w-auto flex-col items-start gap-6">
              <div className="prose">
                <h2>Card</h2>
              </div>
              <div className="flex w-full max-w-xl flex-col gap-4">
                <CardDemo />
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="prose">
                <h2>Context Menu</h2>
              </div>
              <div className="flex w-full flex-col items-start gap-10">
                <ContextMenuDemo />
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="prose">
                <h2>Dialog / Drawer</h2>
              </div>
              <div className="flex w-full flex-col items-start gap-10">
                <DialogDemo />
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="prose">
                <h2>Dropdown Menu</h2>
              </div>
              <div className="flex w-full flex-col items-start gap-10">
                <DropdownDemo />
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="prose">
                <h2>Empty</h2>
              </div>
              <div className="flex w-full flex-col items-start gap-10">
                <EmptyInputGroup />
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="prose">
                <h2>Field</h2>
              </div>
              <div className="flex w-full flex-col items-start gap-10">
                <FieldDemo />
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-6">
              <div className="prose">
                <h2>Form Components</h2>
              </div>
              <div className="flex w-full max-w-4xl flex-col items-start gap-10">
                <InputsDemo />
                <CheckboxDemo />
                <RadioDemo />
              </div>
            </div>

            <div className="flex w-auto flex-col items-start gap-6">
              <div className="prose">
                <h2>Kbd</h2>
              </div>
              <KbdTooltip />
            </div>

            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Popover</h2>
              </div>
              <div className="flex w-auto flex-row gap-4">
                <PopoverDemo />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Separator</h2>
              </div>
              <div className="flex w-auto flex-row gap-4">
                <Separator />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Skeleton</h2>
              </div>
              <div className="flex w-auto flex-row gap-4">
                <SkeletonDemo />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Slider</h2>
              </div>
              <div className="flex w-auto flex-row gap-4">
                <SliderDemo />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Switch</h2>
              </div>
              <div className="flex w-auto flex-row gap-4">
                <SwitchDemo />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Tabs</h2>
              </div>
              <div className="flex w-auto flex-row gap-4">
                <TabsDemo />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Toast</h2>
              </div>
              <div className="flex items-center gap-4">
                <ToastDemo />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Toggle</h2>
              </div>
              <div className="flex items-center gap-4">
                <Toggle aria-label="Toggle bold">
                  <IconBold className="h-4 w-4" />
                </Toggle>
                <Toggle variant="soft" aria-label="Toggle bold">
                  <IconBold className="h-4 w-4" />
                  <span> Bold</span>
                </Toggle>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Tooltip</h2>
              </div>
              <div className="flex w-auto flex-row gap-4">
                <TooltipDemo />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="prose">
                <h2>Typography</h2>
              </div>
              <div className="prose [&_pre]:scrollbar-hide w-full max-w-2xl [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-background-element-active [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-6 [&_pre_code]:bg-transparent [&_pre_code]:p-0">
                <h1 id="example">Example</h1>
                <h2 id="the-last-ice-a-polar-bears-journey">
                  The Last Ice: A Polar Bear’s Journey
                </h2>
                <p>
                  In the frozen reaches of the <a href="#">Arctic</a>, where the
                  ice meets the endless sky, there lived a polar bear named
                  Nanuq. She was known among her kind as{" "}
                  <strong>the wanderer</strong>, for she traveled farther than
                  any bear before her.
                </p>
                <h3 id="the-changing-world">The Changing World</h3>
                <p>
                  The elders spoke of times when the ice stretched beyond the
                  horizon, solid and eternal. Now, Nanuq watched it shrink each
                  summer, the hunting grounds growing smaller with every passing
                  year.
                </p>
                <blockquote>
                  <p>
                    “The ice remembers what we have forgotten,” her mother once
                    told her. “Listen to it before it’s gone.”
                  </p>
                </blockquote>
                <h3 id="the-hunt">The Hunt</h3>
                <p>
                  Polar bears are patient hunters. Nanuq would wait by seal
                  breathing holes for hours, perfectly still, conserving energy
                  for the moment that mattered:
                </p>
                <ol>
                  <li>Find an active breathing hole</li>
                  <li>Wait motionless, sometimes for hours</li>
                  <li>Strike with precision when the seal surfaces</li>
                </ol>
                <p>
                  Success required discipline. A single hunt might burn{" "}
                  <code>2,000 calories</code>, but a ringed seal could provide
                  ten times that in return.
                </p>
                <h3 id="survival-skills">Survival Skills</h3>
                <p>
                  Over generations, polar bears developed remarkable
                  adaptations:
                </p>
                <ul>
                  <li>Hollow fur that traps warmth</li>
                  <li>Black skin beneath white fur to absorb heat</li>
                  <li>Massive paws that act as snowshoes</li>
                  <li>The ability to swim for days without rest</li>
                </ul>
                <p>
                  Nanuq used every advantage. In <em>this</em> world, there was
                  no room for weakness.
                </p>
                <h3 id="the-numbers">The Numbers</h3>

                <table>
                  <thead>
                    <tr>
                      <th>Season</th>
                      <th>Ice Coverage</th>
                      <th>Hunting Success</th>
                      <th>Body Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Winter</td>
                      <td>Extensive</td>
                      <td>High</td>
                      <td>450 kg</td>
                    </tr>
                    <tr>
                      <td>Spring</td>
                      <td>Stable</td>
                      <td>Moderate</td>
                      <td>420 kg</td>
                    </tr>
                    <tr>
                      <td>Summer</td>
                      <td>Minimal</td>
                      <td>Low</td>
                      <td>350 kg</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  The pattern was clear: less ice meant less food, meant less
                  life. Yet Nanuq pressed on, adapting as her ancestors had for{" "}
                  <a href="#">thousands of years</a>.
                </p>
                <hr />
                <p>
                  <em>
                    Polar bears are classified as vulnerable. Their survival
                    depends on the choices we make today.
                  </em>
                </p>
              </div>
              <Kbd className="ml-1">Tab</Kbd>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export { App };
