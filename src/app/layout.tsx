import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "A & R s.r.o. | IT služby a správa počítačov Trenčín",
  description:
    "Komplexné IT služby pre firmy v Trenčíne a okolí. SLA servisné zmluvy, IT outsourcing, licencie Microsoft 365, Acronis Cyber Protect Cloud, Kerio Control.",
  keywords: [
    "IT služby Trenčín",
    "správa počítačov",
    "IT outsourcing",
    "SLA",
    "Microsoft 365",
    "Acronis",
    "Kerio Control",
    "servis počítačov",
  ],
  openGraph: {
    title: "A & R s.r.o. | IT služby a správa počítačov Trenčín",
    description:
      "Komplexné IT služby pre firmy v Trenčíne a okolí. SLA servisné zmluvy, IT outsourcing, licencie Microsoft 365, Acronis Cyber Protect Cloud, Kerio Control.",
    url: "https://opravypocitacov.sk",
    siteName: "opravypocitacov.sk",
    locale: "sk_SK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
