import "@/styles/globals.css";

import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "StarterPics",
  description: "Transform Your Images Into Revenue-Generating Sites",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`font-sans`} lang="en">
      <body>
        <TRPCReactProvider>
          <Header />

          {children}

          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
