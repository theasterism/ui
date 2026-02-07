import type * as React from "react";
import { typographyVariants } from "orphos/typography";
import { cn } from "orphos/utils";
import { slugify } from "../utils/slug";

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

function Section({ title, description, children, className }: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-24", className)}
      id={slugify(title)}>
      <div className="flex flex-col gap-2">
        <h3
          className={typographyVariants({
            variant: "heading-3",
            className: "mt-0!",
          })}>
          {title}
        </h3>
        {description ? (
          <p className="text-sm text-foreground-subtle leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </section>
  );
}

export { Section };
