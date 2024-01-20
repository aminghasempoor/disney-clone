"use client";
import "./globals.css";
import "@fontsource/roboto/300.css";
import HeaderLayout from "@/layouts/Header";
import { UserProvider } from "@/lib/app/contexts/user";
import { LoadingProvider } from "@/lib/app/contexts/loading";
import AppLayout from "@/layouts/AppLayouts";
import { theme } from "@/core/utils/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#000000" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <UserProvider>
            <LoadingProvider>
              <AppLayout>
                <HeaderLayout />
                {children}
              </AppLayout>
            </LoadingProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
