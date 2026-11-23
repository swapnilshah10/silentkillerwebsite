import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';
import Spotlight from "@/components/Spotlight";



export const metadata = {
  metadataBase: new URL("https://silentkillerop.me"),
  title: {
    default: "Atom Reaction: Free Online Strategy Game | SilentKillerOP",
    template: "%s | SilentKillerOP",
  },
  description:
    "Atom Reaction is a free online multiplayer strategy game. Rules, strategy guides and play links, plus browser games, videos and projects by Swapnil Shah.",
  keywords: ["SilentKillerOP", "BGMI", "TDM", "chess shorts", "Swapnil Shah", "web projects", "Dice Chess", "Atom Reaction"],
  authors: [{ name: "Swapnil Shah" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "SilentKillerOP",
    url: "https://silentkillerop.me",
    title: "Atom Reaction: Free Online Strategy Game | SilentKillerOP",
    description: "Free online multiplayer strategy game with rules and guides.",
    images: [{ url: "/profile.png" }],
  },
  twitter: { card: "summary", creator: "@swapnilshah102" },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#07070b" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: "SilentKillerOP", url: "https://silentkillerop.me" },
    {
      "@type": "Person",
      name: "Swapnil Shah",
      url: "https://silentkillerop.me",
      sameAs: [
        "https://www.youtube.com/@silentkillerop",
        "https://www.instagram.com/ig_silentkiller_op/",
        "https://twitter.com/swapnilshah102",
        "https://github.com/swapnilshah10",
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.9/dist/js/bootstrap.bundle.min.js"></script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7330626906993460" crossOrigin="anonymous"></script>
      </head>

      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Spotlight />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
