import type * as React from "react";
import { useEffect, useState } from "react";

export function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const handleChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handleChange);
    return () => window.removeEventListener("popstate", handleChange);
  }, []);

  return pathname;
}

function isModifiedEvent(event: React.MouseEvent<HTMLAnchorElement>) {
  return (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  );
}

interface AppLinkProps extends React.ComponentProps<"a"> {
  href: string;
}

export function AppLink({ href, onClick, ...props }: AppLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || isModifiedEvent(event)) return;
    if (!href.startsWith("/")) return;

    event.preventDefault();
    window.history.pushState(null, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));

    if (href.includes("#")) {
      const anchor = href.split("#")[1];
      if (!anchor) return;
      requestAnimationFrame(() => {
        document.getElementById(anchor)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
