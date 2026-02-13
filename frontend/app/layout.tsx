import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./providers";
import { GridLines } from "@/components/layout/grid-lines";
import { Toolbar } from "@/components/layout/toolbar";
import { Footer } from "@/components/layout/footer";
import { getSiteSettings } from "@/lib/graphql/fetchers";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();

  return {
    title: {
      default: site.title,
      template: `%s | ${site.title}`,
    },
    description: site.description,
    metadataBase: new URL(site.url),
    openGraph: {
      title: site.title,
      description: site.description,
      url: site.url,
      siteName: site.title,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: site.title,
      description: site.description,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} font-mono`}
        style={{ fontWeight: 350 }}
      >
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-background focus:border focus:border-border"
          >
            Skip to main content
          </a>
          <GridLines />
          <Toolbar />
          <div className="min-h-screen px-8 py-10 min-[1550px]:translate-x-content-offset overflow-x-clip">
            <div className="mx-auto max-w-[920px]">
              <main id="main">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
