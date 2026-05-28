import { IconBrandGithub } from "@tabler/icons-react";
import { buttonVariants } from "orphos/button";
import { cn } from "orphos/utils";
import { useEffect, useState } from "react";
import { CONFIG } from "../lib/config";

export function GithubLink() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const controller = new AbortController();
  //
  //   async function loadGithubStars() {
  //     try {
  //       const res = await fetch("/api/github/stars", {
  //         signal: controller.signal,
  //       });
  //
  //       if (!res.ok) throw new Error(`${res.statusText}: ${res.status}`);
  //
  //       const data = (await res.json()) as {
  //         count: number;
  //       };
  //
  //       setCount(data?.count);
  //     } catch (error: unknown) {
  //       if (error instanceof Error && error.name === "AbortError") return;
  //
  //       console.error("Failed to fetch github stars", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //
  //   loadGithubStars();
  //
  //   return () => controller.abort();
  // }, []);
  //
  return (
    <a
      href={CONFIG.links.github}
      className={cn(
        buttonVariants({
          variant: "ghost",
        })
      )}
      target="_blank"
      rel="noreferrer">
      <IconBrandGithub />
      <span className="w-fit text-foreground-subtle tabular-nums">
        {isLoading ? 0 : count}
      </span>
    </a>
  );
}
