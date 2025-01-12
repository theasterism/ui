import { cva } from "cva";

export const typographyVariants = cva({
  variants: {
    variant: {
      paragraph: "leading-7 text-base tracking-[-3%] [&:not(:first-child)]:mt-6",
      heading1: "text-black text-3xl  font-bold leading-none text-balance tracking-tight mt-8",
      heading2: "text-black text-2xl font-bold leading-tight text-balance tracking-tight mt-8",
      heading3: "text-black text-xl font-semibold leading-snug text-balance tracking-tight mt-8",
      heading4: "text-black text-lg font-semibold leading-snug text-balance tracking-tight mt-8",
      blockquote: "mt-6 border-l-4 border-primary-solid pl-6 italic",
      ul: "my-6 ml-4 list-disc [&>li]:mt-2 [&>li]:pl-1 marker:text-primary-solid",
      ol: "my-6 ml-4 list-decimal [&>li]:mt-2 [&>li]:pl-1 marker:text-primary-solid",
      code: "px-[0.2rem] py-[0.1rem] break-words text-sm rounded-sm bg-background dark:bg-background-subtle border-[0.5px] border-border-subtle [box-decoration-break:clone]",
      kbd: "inline rounded border border-border-subtle bg-background dark:bg-background-subtle px-1 text-xs [box-decoration-break:clone]",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
});
