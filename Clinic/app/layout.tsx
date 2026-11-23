import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { clinic } from "@/lib/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Providers from "@/components/Providers";
import FloatingButtons from "@/components/FloatingButtons";

const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title: { default: `${clinic.name} | Dentist in ${clinic.city}`, template: `%s | ${clinic.name}` },
  description: `Personalized, modern dental care in ${clinic.city}, ${clinic.state}. Book an appointment with ${clinic.doctor}.`,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: clinic.name, title: clinic.name, description: "Modern, patient-centered dental care." },
  twitter: { card: "summary_large_image" },
};
const jsonLd = {
  "@context": "https://schema.org", "@type": "Dentist", name: clinic.name, url: clinic.siteUrl,
  telephone: clinic.phone, email: clinic.email,
  address: { "@type": "PostalAddress", streetAddress: clinic.address, addressLocality: clinic.city, addressRegion: clinic.state, addressCountry: "IN" },
  sameAs: [clinic.instagram, clinic.youtube],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={body.variable}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers><Navbar /><main>{children}</main><Footer /><MobileCTA /><FloatingButtons /></Providers>
      </body>
    </html>
  );
}
