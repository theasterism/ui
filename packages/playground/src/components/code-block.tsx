import type * as React from "react";
import { cn } from "orphos/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
}

function CodeBlock({ code, className }: CodeBlockProps) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-xl border border-border-subtle bg-background-element px-4 py-3 text-sm text-foreground-subtle font-mono",
        className
      )}>
      <code>{code}</code>
    </pre>
  );
}

export { CodeBlock };
