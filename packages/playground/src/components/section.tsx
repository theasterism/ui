import { typographyVariants } from "orphos/typography";
import type * as React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function Section({ title, children, className }: SectionProps) {
  return (
    <section className={className} id={title.toLowerCase().replace(/\s+/g, "-")}>
      <h2
        className={typographyVariants({
          variant: "heading-2",
          className: "mb-6 mt-0!",
        })}>
        {title}
      </h2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
}

export { Section };
