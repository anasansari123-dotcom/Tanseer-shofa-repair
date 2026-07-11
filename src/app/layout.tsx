import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { GlobalFloatingTools } from "@/components/effects/GlobalFloatingTools";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tanseersofarepair.com"),
  title: "Tanseer Sofa Repair | Premium Doorstep Upholstery & Furniture Restoration",
  description:
    "Luxury doorstep sofa repair, upholstery, recliner repair, leather restoration, and furniture restoration services. Expert craftsmanship with 10+ years experience. Book now!",
  keywords: [
    "sofa repair",
    "upholstery",
    "doorstep sofa repair",
    "leather repair",
    "furniture restoration",
    "recliner repair",
    "cushion replacement",
    "foam replacement",
    "Mumbai sofa repair",
    "Tanseer",
  ],
  openGraph: {
    title: "Tanseer Sofa Repair | Premium Doorstep Upholstery Services",
    description:
      "Professional sofa restoration with expert craftsmanship at your doorstep.",
    images: ["/images/logo.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${montserrat.variable} antialiased`}>
        <ClientProviders>
          <GlobalFloatingTools />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <FloatingButtons />
        </ClientProviders>
      </body>
    </html>
  );
}
