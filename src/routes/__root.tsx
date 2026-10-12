import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider, useI18n } from "@/i18n/I18nProvider";
import { ZSymbol } from "@/components/brand/BrandMark";
import { buttonCls } from "@/components/ui-site/Button";

function NotFoundPage() {
  const { t } = useI18n();
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-5">
      <div className="absolute inset-0 -z-10 bg-hero" aria-hidden="true" />
      <div className="max-w-md text-center">
        <ZSymbol className="mx-auto h-16 w-16 opacity-80" />
        <p className="mt-8 font-display text-6xl font-semibold text-gradient">404</p>
        <h1 className="mt-4 text-xl font-semibold">{t.notFound.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.notFound.text}</p>
        <Link to="/" className={buttonCls("primary", "mt-8")}>{t.notFound.back}</Link>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Esta página no cargó</h1>
        <p className="mt-2 text-sm text-muted-foreground">Algo salió mal. Probá de nuevo o volvé al inicio.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className={buttonCls("primary")}>Reintentar</button>
          <a href="/" className={buttonCls("ghost")}>Inicio</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#09090B" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
