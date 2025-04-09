import { cva } from "cva";

export const typographyVariants = cva({
  variants: {
    variant: {
      small: "text-sm leading-[1.4]",
      paragraph: "text-base leading-[1.6] [&:not(:first-child)]:mt-6",
      heading1:
        "text-4xl  font-bold text-balance leading-[1.2] tracking-tight mt-8",
      heading2:
        "text-3xl font-bold text-balance leading-[1.3] tracking-tight mt-8",
      heading3:
        "text-2xl font-semibold text-balance leading-[1.3] tracking-tight mt-8",
      heading4:
        "text-xl font-semibold text-balance leading-[1.4] tracking-tight mt-8",
      heading5:
        "text-lg font-semibold text-balance leading-[1.4] tracking-tight mt-8",
      blockquote: "mt-6 border-l-4 border-primary pl-6 italic",
      ul: "my-6 ml-4 list-disc [&>li]:mt-2 [&>li]:pl-1 marker:text-primary",
      ol: "my-6 ml-4 list-decimal [&>li]:mt-2 [&>li]:pl-1 marker:text-primary",
      code: "px-[0.3rem] py-[0.2rem] before:content-(--code-marker) after:content-(--code-marker) w-fit break-words text-sm rounded-sm bg-primary-element text-primary-element-foreground [box-decoration-break:clone]",
      kbd: "inline w-fit rounded-sm border border-border/60 bg-background px-1 text-sm text-foreground [box-decoration-break:clone]",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
});
