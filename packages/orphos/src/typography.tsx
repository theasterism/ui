import { cva } from "cva";

export const typographyVariants = cva({
  variants: {
    variant: {
      paragraph: "leading-7 text-base [&:not(:first-child)]:mt-6",
      heading1: "text-3xl  font-bold text-balance tracking-tight mt-8",
      heading2: "text-2xl font-bold text-balance tracking-tight mt-8",
      heading3: "text-xl font-semibold text-balance tracking-tight mt-8",
      heading4: "text-lg font-semibold text-balance tracking-tight mt-8",
      blockquote: "mt-6 border-l-4 border-primary pl-6 italic",
      ul: "my-6 ml-4 list-disc [&>li]:mt-2 [&>li]:pl-1 marker:text-primary",
      ol: "my-6 ml-4 list-decimal [&>li]:mt-2 [&>li]:pl-1 marker:text-primary",
      code: "px-[0.3rem] py-[0.2rem] w-fit break-words text-sm rounded-sm bg-primary-element text-primary-element-foreground [box-decoration-break:clone]",
      kbd: "inline w-fit rounded-sm border border-border/60 bg-background px-1 text-sm text-foreground [box-decoration-break:clone]",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
});
