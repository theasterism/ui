import { cva } from "cva";

export const typographyVariants = cva({
  variants: {
    variant: {
      small: "text-sm leading-[1.4]",
      paragraph: "text-base leading-[1.6] [&:not(:first-child)]:mt-6",
      heading1:
        "mt-8 text-balance font-bold text-4xl leading-[1.2] tracking-tight",
      heading2:
        "mt-8 text-balance font-bold text-3xl leading-[1.3] tracking-tight",
      heading3:
        "mt-8 text-balance font-semibold text-2xl leading-[1.3] tracking-tight",
      heading4:
        "mt-8 text-balance font-semibold text-xl leading-[1.4] tracking-tight",
      heading5:
        "mt-8 text-balance font-semibold text-lg leading-[1.4] tracking-tight",
      blockquote: "mt-6 border-primary border-l-4 pl-6 italic",
      ul: "my-6 ml-4 list-disc marker:text-primary [&>li]:mt-2 [&>li]:pl-1",
      ol: "my-6 ml-4 list-decimal marker:text-primary [&>li]:mt-2 [&>li]:pl-1",
      code: "w-fit break-words rounded-sm bg-background-element px-[0.3rem] py-[0.075rem] text-foreground-subtle text-sm [box-decoration-break:clone] before:content-(--code-marker) after:content-(--code-marker)",
      kbd: "order inline w-fit rounded-sm bg-background-element-hover px-1.5 py-px text-foreground text-xs [box-decoration-break:clone] dark:bg-background-element-active dark:text-foreground-subtle/85",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
});
