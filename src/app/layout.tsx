import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://vcemathsphysics.com.au"),
  title: "VCE Physics & Maths Specialists | Expert PhD Coaching, Victoria",
  description:
    "Specialist VCE coaching in Physics and Maths (Methods & Specialist) by PhD-qualified educators in Victoria. Targeted, expert support for VCE students.",
  keywords: [
    "VCE coaching Victoria",
    "VCE Physics tutor",
    "VCE Maths Methods tutor",
    "VCE Specialist Maths",
    "PhD tutor Melbourne",
    "VCE tuition Kew",
    "VCE exam preparation",
  ],
  authors: [{ name: "VCE Maths & Physics Specialists" }],
  creator: "VCE Maths & Physics Specialists",
  publisher: "VCE Maths & Physics Specialists",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://vcemathsphysics.com.au",
    siteName: "VCE Maths & Physics Specialists",
    title: "VCE Physics & Maths Specialists | Expert PhD Coaching",
    description: "Specialist VCE coaching by PhD-qualified educators in Victoria",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VCE Maths & Physics Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VCE Physics & Maths Specialists | Expert PhD Coaching",
    description: "Specialist VCE coaching by PhD-qualified educators",
    creator: "@vcemathsphysics",
  },
  alternates: {
    canonical: "https://vcemathsphysics.com.au",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#003366" />
        
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
