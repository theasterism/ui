import { DocsPage } from "./pages/docs";
import { HomePage } from "./pages/home";
import { usePathname } from "./router";

function App() {
  const pathname = usePathname();

  if (pathname.startsWith("/docs")) {
    return <DocsPage />;
  }

  return <HomePage />;
}

export { App };
