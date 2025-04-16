import { Fragment } from "react";

export const palette = [
  "gray",
  "green",
  "pink",
  "yellow",
  "lime",
  "purple",
  "blue",
];
export const colorScaleNumbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function ColorPalette() {
  return (
    <Fragment>
      <div className="flex flex-col items-start gap-6">
        <h2 className="font-bold text-2xl leading-tight tracking-tight">
          Colors
        </h2>
        <div className="flex w-auto flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p>Brand:</p>
            <div className="size-12 rounded-full border-3 bg-primary" />
          </div>
          <div className="flex flex-col gap-2">
            <p>Background:</p>
            <div className="flex gap-2">
              <div className="size-12 rounded-full border-3 bg-background-subtle" />
              <div className="size-12 rounded-full border-3 bg-background" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Text:</p>
            <div className="flex gap-2">
              <div className="size-12 rounded-full border-3 bg-foreground" />
              <div className="size-12 rounded-full border-3 bg-foreground-subtle" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-4xl flex-col gap-6">
        <h2 className="font-bold text-2xl leading-tight tracking-tight">
          Palette
        </h2>
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
          {palette.map((color) => (
            <div key={color} className="grid w-fit grid-cols-5">
              {colorScaleNumbers.map((shade) => (
                <span
                  style={{
                    backgroundColor: `var(--${color}-${shade})`,
                  }}
                  className="size-12 rounded-full border-3"
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
