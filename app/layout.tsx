import "./globals.css";
import "@fontsource/roboto/300.css";
import HeaderLayout from "@/layouts/Header";
import { UserProvider } from "@/lib/app/contexts/user";
import { LoadingProvider } from "@/lib/app/contexts/loading";
import AppLayout from "@/layouts/AppLayouts";
import ThemeUI from "@/components/ThemeUI";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeUI>
          <UserProvider>
            <LoadingProvider>
              <AppLayout>
                <HeaderLayout />
                {children}
              </AppLayout>
            </LoadingProvider>
          </UserProvider>
        </ThemeUI>
      </body>
    </html>
  );
}
