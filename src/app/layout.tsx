import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navigation from "./components/navigation";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piyawong - Full Stack Developer",
  description:
    "Full-Stack Developer passionate about building modern, scalable web applications and agentic AI solutions that solve real-world problems.",
  // generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const widgetURL = "http://localhost:3100/embed.js";
  console.log("widgetURL", process.env.NEXT_PUBLIC_WIDGET_URL);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {widgetURL && (
          <script
            src={widgetURL}
            data-position="bottom-right"
            // data-primary-color="#3b82f6"
            data-primary-color="#155dfc"
            data-secondary-color="#3b82f6"
            data-background-color="#ffffff"
            data-text-color="#ffffff"
            data-greeting="Hi, I'm KnowMe AI. Ask me anything about Piyawong!"
          ></script>
        )}

        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navigation />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
