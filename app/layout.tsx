import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://shubhambadhe.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Software Developer (.NET / C# / React)`,
    template: `%s — ${profile.name}`,
  },
  description: profile.objective,
  keywords: [
    "Shubham Badhe",
    "Software Developer",
    ".NET Core Developer",
    "C# Developer",
    "ASP.NET MVC",
    "React JS Developer",
    "SQL Server Developer",
    "REST API Engineer",
    "Mumbai Software Engineer",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — Software Developer`,
    description: profile.objective,
    siteName: `${profile.name} Portfolio`,
    images: [{ url: "/profile.jpg", width: 1080, height: 1350, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Developer`,
    description: profile.objective,
    images: ["/profile.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent theme flash: read persisted preference before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="min-h-screen">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ScrollProgress />
        <CursorGlow />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
