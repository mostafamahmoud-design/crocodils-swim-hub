import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
<<<<<<< HEAD
        <h2 className="mt-4 text-xl font-semibold text-foreground">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
=======
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
<<<<<<< HEAD
            العودة للرئيسية
=======
            Go home
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
<<<<<<< HEAD
          لم تتم تحميل هذه الصفحة
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          حدث خطأ في الخادم. يمكنك إعادة التحميل أو العودة للرئيسية.
=======
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
<<<<<<< HEAD
            حاول مرة أخرى
=======
            Try again
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
<<<<<<< HEAD
            العودة للرئيسية
=======
            Go home
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
          </a>
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
<<<<<<< HEAD
      { title: "أكاديمية Crocodils للسباحة" },
      { name: "description", content: "موقع أكاديمية Crocodils للسباحة يوفر تجربة حديثة ومتجاوبة لتسويق برامج السباحة للأطفال والكبار والرياضيين.", },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "أكاديمية Crocodils للسباحة" },
      { property: "og:description", content: "موقع أكاديمية Crocodils للسباحة يوفر تجربة حديثة ومتجاوبة لتسويق برامج السباحة للأطفال والكبار والرياضيين.", },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "أكاديمية Crocodils للسباحة" },
      { name: "twitter:description", content: "موقع أكاديمية Crocodils للسباحة يوفر تجربة حديثة ومتجاوبة لتسويق برامج السباحة للأطفال والكبار والرياضيين.", },
=======
      { title: "Crocodile Academey" },
      { name: "description", content: "Crocodils Swim Hub is a modern, responsive landing page for a professional swimming academy." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Crocodile Academey" },
      { property: "og:description", content: "Crocodils Swim Hub is a modern, responsive landing page for a professional swimming academy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Crocodile Academey" },
      { name: "twitter:description", content: "Crocodils Swim Hub is a modern, responsive landing page for a professional swimming academy." },
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
<<<<<<< HEAD
    <html lang="ar" dir="rtl">
=======
    <html lang="en">
>>>>>>> 4a37b529fd38af1dcbf40bac0334003c9de6eb02
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
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
