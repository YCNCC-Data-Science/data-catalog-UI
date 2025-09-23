import type { Metadata } from "next";
import PageCard from "@/components/layouts/page-card";
import Providers from "@/app/providers";

export const metadata: Metadata = {
  title: "YCNCC Data Catalog",
  description: "Explore datasets created at YCNCC",
  openGraph: {
    title: "YCNCC Data Catalog",
    description:
      "Explore datasets created at the Yale Center for Natural Carbon Capture (YCNCC)",
    url: "https://naturalcarboncapture.yale.edu/",
    siteName: "YCNCC Data Catalog",
    locale: "en_US",
    type: "website",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <PageCard>{children}</PageCard>
        </Providers>
      </body>
    </html>
  );
}
