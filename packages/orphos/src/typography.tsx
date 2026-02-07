import { cva } from "cva";

export const typographyVariants = cva({
  variants: {
    variant: {
      small: "font-medium text-foreground text-sm leading-none",
      strong: "font-semibold text-base text-foreground",
      paragraph:
        "not-first:mt-4 text-base text-foreground-subtle leading-[1.6]",
      "heading-1":
        "not-first:mt-8 scroll-m-20 text-balance font-semibold text-[32px] text-foreground leading-[1.4] tracking-tight sm:text-5xl",
      "heading-2":
        "mt-8 scroll-m-20 text-balance font-semibold text-2xl text-foreground leading-[1.3]",
      "heading-3":
        "mt-8 scroll-m-20 text-balance font-semibold text-foreground text-xl leading-[1.3]",
      "heading-4":
        "mt-8 scroll-m-20 text-balance font-semibold text-foreground text-lg leading-[1.125]",
      link: "font-medium text-info underline decoration-info-border underline-offset-[2.5px] hover:decoration-info",
      blockquote:
        "mt-4 border-primary border-l-4 pl-4 text-foreground-subtle italic",
      ul: "my-4 list-disc pl-7.5 text-foreground-subtle marker:text-foreground [&>li]:mt-2",
      ol: "my-4 text-foreground-subtle marker:text-foreground [&>li]:mt-2 [&>li]:pl-7.5",
      code: "wrap-break-word w-fit rounded-sm border bg-background-element px-[0.3rem] py-[0.075rem] text-foreground-subtle text-sm",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
});
