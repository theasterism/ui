import { typographyVariants } from "orphos/typography";
import { cn } from "orphos/utils";

const paletteGroups = [
  {
    title: "Brand",
    swatches: [{ label: "Primary", className: "bg-primary" }],
  },
  {
    title: "Background",
    swatches: [
      { label: "Default", className: "bg-background" },
      { label: "Subtle", className: "bg-background-subtle" },
      { label: "Element", className: "bg-background-element" },
    ],
  },
  {
    title: "Text",
    swatches: [
      { label: "Foreground", className: "bg-foreground" },
      { label: "Muted", className: "bg-foreground-subtle" },
    ],
  },
];

function ColorPalette() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {paletteGroups.map((group) => (
        <div key={group.title} className="space-y-3">
          <p
            className={typographyVariants({
              variant: "strong",
              className: "text-sm",
            })}>
            {group.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.swatches.map((swatch) => (
              <div key={swatch.label} className="flex items-center gap-2">
                <div
                  className={cn(
                    "size-9 rounded-full border-3 border-border-subtle",
                    swatch.className
                  )}
                />
                <span className="text-foreground-subtle text-xs">
                  {swatch.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export { ColorPalette };
