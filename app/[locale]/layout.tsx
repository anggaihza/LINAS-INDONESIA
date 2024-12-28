import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "../provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LoadingProvider } from "@/context/LoadingProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arsy Creative Studio",
  description: "Web & App Development and Graphic Desgin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/a-logo.svg" sizes="any" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RBBHJXQVWK"
        ></Script>
        <Script id="google-analytics" strategy="lazyOnload">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RBBHJXQVWK');
            `}</Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
