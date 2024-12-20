import type {Metadata} from "next";
import {Inter} from "next/font/google";

import "./globals.css";
import {ThemeProvider} from "../provider";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {routing} from "@/i18n/routing";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Adrian's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default async function RootLayout({
  children,
  params: {locale},
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  // if (!routing.locales.includes(locale as any)) {
  //   notFound();
  // }
  const messages = await getMessages();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
