import type * as React from "react";
import { typographyVariants } from "orphos/typography";
import { cn } from "orphos/utils";
import { slugify } from "../utils/slug";

interface SectionGroupProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

function SectionGroup({ title, description, children, className }: SectionGroupProps) {
  return (
    <section
      id={slugify(title)}
      className={cn(
        "scroll-mt-24 space-y-8 border-t border-border-subtle pt-10",
        className
      )}>
      <header className="space-y-2">
        <h2
          className={typographyVariants({
            variant: "heading-2",
            className: "mt-0!",
          })}>
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-sm text-foreground-subtle leading-relaxed">
            {description}
          </p>
        ) : null}
      </header>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

export { SectionGroup };
