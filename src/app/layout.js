import 'bootstrap/dist/css/bootstrap.min.css';
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

      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
