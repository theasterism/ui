import { type CXOptions, cx } from "cva";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "micro",
        "mini",
        "small",
        "regular",
        "large",
        "title1",
        "title2",
        "title3",
        "title4",
      ],
    },
  },
});

export function cn(...inputs: CXOptions) {
  return twMerge(cx(inputs));
}
