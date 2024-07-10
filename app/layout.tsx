// layout.tsx
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-ibm-plex-serift'
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone",
  icons: {
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
