import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import Providers from "@/components/providers";
import AnimatedBackground from "@/components/animated/animated-background";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilverma.dev"),
  title: {
    default: "Luke Pupilli a fullstack developer from Pittsburgh, PA",
    template: `%s - Luke Pupilli`,
  },
  description:
    "Hello, I'm Luke Pupilli. - I'm a full stack developer from Pittsburgh, PA.",
  other: {
    "google-site-verification": process.env
      .NEXT_PUBLIC_GOOGLE_VERIFICATION_ID as string,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <Providers>
          {children}
          <AnimatedBackground />
        </Providers>
      </body>
    </html>
  );
}
