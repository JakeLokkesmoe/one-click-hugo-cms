import { Metadata } from "next";

import "../styles/main.css";
import { siteTitle, description } from "@/siteConfig";

import styles from "./layout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amygreenbooks.com"),
  title: siteTitle,
  description,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="mask-icon"
          href="/media/safari-pinned-tab.svg"
          color="#006b2e"
        />
        <meta name="theme-color" content="#006b2e" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={styles.body}>
        <div id="skip" className={styles.skip}>
          <a href="#main-content">Skip to main content</a>
        </div>
        {children}
      </body>
    </html>
  );
}
