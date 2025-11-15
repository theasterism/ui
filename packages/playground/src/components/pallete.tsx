import { typographyVariants } from "orphos/typography";
import { Fragment } from "react";

export const palette = ["gray", "tomato", "red", "yellow", "green", "blue"];
export const colorScaleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function ColorPalette() {
  return (
    <Fragment>
      <div className="flex flex-col items-start gap-6">
        <h2
          className={typographyVariants({
            variant: "heading-2",
          })}>
          Colors
        </h2>
        <div className="flex w-auto flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p
              className={typographyVariants({
                variant: "strong",
              })}>
              Brand:
            </p>
            <div className="size-12 rounded-full border-3 bg-primary" />
          </div>
          <div className="flex flex-col gap-2">
            <p
              className={typographyVariants({
                variant: "strong",
              })}>
              Background:
            </p>
            <div className="flex gap-2">
              <div className="size-12 rounded-full border-3 bg-background" />
              <div className="size-12 rounded-full border-3 bg-background-subtle" />
              <div className="size-12 rounded-full border-3 bg-background-element" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p
              className={typographyVariants({
                variant: "strong",
              })}>
              Text:
            </p>
            <div className="flex gap-2">
              <div className="size-12 rounded-full border-3 bg-foreground" />
              <div className="size-12 rounded-full border-3 bg-foreground-subtle" />
              <div className="size-12 rounded-full border-3 bg-foreground-muted" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-4xl flex-col gap-6">
        <h2
          className={typographyVariants({
            variant: "heading-2",
          })}>
          Palette
        </h2>
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
          {palette.map((color) => (
            <div key={color} className="-gap-x-2 grid w-fit grid-cols-5">
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
