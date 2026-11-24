import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soumen Maiti | Backend Software Developer",
  description:
    "Portfolio of Soumen Maiti, a backend software developer in Kolkata building business applications, e-commerce workflows, CMS platforms and APIs with PHP, Laravel, CodeIgniter and MySQL.",
  applicationName: "Soumen Maiti Portfolio",
  authors: [{ name: "Soumen Maiti" }],
  creator: "Soumen Maiti",
  openGraph: {
    title: "Soumen Maiti | Backend Software Developer",
    description:
      "Backend engineering, business applications, e-commerce workflows, CMS platforms and practical problem-solving.",
    siteName: "Soumen Maiti Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Soumen Maiti | Backend Software Developer",
    description:
      "Backend engineering, business applications, CMS platforms and practical problem-solving.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090b0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
