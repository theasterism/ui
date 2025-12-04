import { typographyVariants } from "orphos/typography";
import { Fragment } from "react";

export function ColorPalette() {
  return (
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
          </div>
        </div>
      </div>
    </div>
  );
}
