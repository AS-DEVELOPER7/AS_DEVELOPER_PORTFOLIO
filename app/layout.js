import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AS-DEVELOPER | Portfolio",
  description: "Crafting High-Performance Web & Mobile Apps.",
  icons: {
    icon: "/AS.svg",
    shortcut: "/AS.svg",
    apple: "/AS.svg",
  },
};

import Script from "next/script";
import { cn } from "@/lib/utils";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/AS.svg" type="image/svg+xml" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var html = document.documentElement;
                var saved = localStorage.getItem('theme');
                var mode = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                html.classList.toggle('dark', mode === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-full transition-all duration-500 bg-neutral font-[family-name:var(--font-hanken-grotesk)] relative overflow-x-hidden",
        )}
      >
        {/* Dotted Background */}
        <div
          className={cn(
            "absolute inset-0 -z-10",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#a3a3a3_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />
        {/* Faded Mask */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-neutral [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <main className="max-w-xl md:p-4 mx-auto flex flex-col w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
