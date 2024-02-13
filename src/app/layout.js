import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';



export const metadata = {
  title: "SilentKillerOP's Website",
  description: "Created by silentkillerop with love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </head>

      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
