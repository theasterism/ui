import { Fragment } from "react";

export const palette = ["gray", "tomato", "red", "grass", "amber", "blue"];
export const colorScaleNumbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function ColorPalette() {
  return (
    <Fragment>
      <div className="flex flex-col gap-6 items-start">
        <h2 className="text-2xl font-bold leading-tight tracking-tight">
          Colors
        </h2>
        <div className="flex flex-col gap-4 w-auto">
          <div className="flex flex-col gap-2">
            <p>Brand:</p>
            <div className="size-12 bg-primary-solid border-3 border-border-subtle rounded-full" />
          </div>
          <div className="flex flex-col gap-2">
            <p>Background:</p>
            <div className="flex gap-2">
              <div className="size-12 bg-background-subtle dark:bg-background border-3 border-border-subtle rounded-full" />
              <div className="size-12 bg-background dark:bg-background-subtle border-3 border-border-subtle rounded-full" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Text:</p>
            <div className="flex gap-2">
              <div className="size-12 bg-black dark:bg-white border-3 border-border-subtle rounded-full" />
              <div className="size-12 bg-foreground border-3 border-border-subtle rounded-full" />
              <div className="size-12 bg-foreground-subtle border-3 border-border-subtle rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold leading-tight tracking-tight">
          Palette
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6">
          {palette.map((color) => (
            <div key={color} className="grid grid-cols-5 w-fit">
              {colorScaleNumbers.map((shade) => (
                <span
                  style={{
                    backgroundColor: `var(--${color}-${shade})`,
                  }}
                  className="size-12 border-3 border-border-subtle rounded-full"
                  key={shade}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
