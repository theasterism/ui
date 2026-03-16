"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import * as React from "react";

import { cn } from "./utils";

function Slider({
  className,
  children,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      thumbAlignment="edge"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className="data-[orientation=horizontal]:w-full"
      {...props}>
      {children}
      <SliderPrimitive.Control
        data-slot="slider-control"
        className={cn(
          "flex touch-none select-none data-disabled:pointer-events-none data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:min-w-44 data-[orientation=vertical]:flex-col data-disabled:opacity-60",
          className
        )}>
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow select-none before:absolute before:rounded-full before:bg-background-element-hover data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1 data-[orientation=horizontal]:before:inset-x-0.5 data-[orientation=vertical]:before:inset-x-0 data-[orientation=horizontal]:before:inset-y-0 data-[orientation=vertical]:before:inset-y-0.5">
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="select-none rounded-full bg-primary data-[orientation=horizontal]:ms-0.5 data-[orientation=vertical]:mb-0.5"
          />
          {Array.from({ length: _values.length }, (_, index) => (
            <SliderPrimitive.Thumb
              data-slot="slider-thumb"
              // biome-ignore lint/suspicious/noArrayIndexKey: Slider thumbs have no stable ID, index matches value order
              key={index}
              className="block size-4 shrink-0 select-none rounded-full border-2 bg-background-element before:absolute before:inset-0 before:rounded-full focus-visible:outline-2 has-focus-visible:outline-2 data-dragging:outline-2 data-dragging:outline-focus-ring [&:is(:focus-visible,[data-dragging])]:shadow-none"
            />
          ))}
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };
