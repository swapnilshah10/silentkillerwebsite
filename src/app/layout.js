import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from '@/components/Navbar';



export const metadata = {
  title: "SilentKillerOP's Website",
  description: "Welcome to Silent Killer OP, your ultimate gaming destination! At Silent Killer OP, we are dedicated to delivering top-notch gaming content, specializing in BGmi (Battlegrounds Mobile India) videos that showcase thrilling gameplay, insightful strategies, and expert tips to enhance your gaming experience. As passionate gamers ourselves, we understand the excitement and challenges that come with the gaming world, and our goal is to provide you with engaging and entertaining content that resonates with the gaming community.  Our YouTube channel is your go-to source for high-quality BGmi videos that cover a wide range of topics. Whether you're seeking in-depth game guides, winning strategies, pro-level gameplay, or simply looking to stay updated on the latest trends and updates in the gaming world, Silent Killer OP has you covered. We pride ourselves on delivering not only entertaining content but also valuable insights that can elevate your gaming skills and help you navigate the dynamic landscape of BGmi.  Join our community of gaming enthusiasts, where you can engage in discussions, share your thoughts, and connect with fellow gamers. Silent Killer OP is more than just a YouTube channel; it's a hub for like-minded individuals who share a passion for gaming excellence. Be part of the excitement as we explore the vast world of BGmi, uncover hidden strategies, and celebrate the victories that make gaming truly exhilarating.   Explore our diverse range of videos, from intense gameplay highlights to comprehensive tutorials and reviews. Silent Killer OP is committed to providing content that caters to gamers of all levels, whether you're a seasoned pro or a newcomer to the gaming scene. Our channel is designed to be your one-stop destination for all things BGmi, offering a blend of entertainment and education that keeps you engaged and informed.   Don't miss out on the action – hit that subscribe button, turn on notifications, and embark on a gaming journey with Silent Killer OP. Together, let's dive into the world of BGmi, conquer challenges, and celebrate the victories that define us as gamers. Welcome to Silent Killer OP, where gaming meets excellence, and every video is a testament to the passion that unites us in the gaming community. Game on! Created by silentkillerop with love",
  keywords: "silent  killer  op  silentkillerop  silentkiller  silentkillerop's  silentkillerop's website  silentkillerop's website created by silentkillerop  silentkillerop's website created by silentkillerop with love Silent Killer OP, gaming, tips, tricks, strategies, community Discover the ultimate gaming experience at Silent Killer OP. Get the latest tips, tricks, and strategies for dominating your favorite games. Join our community now! Silent Killer OP   SilentKillerOP website   Silent Killer OP, SilentKillerOP.tech, Silentkillerop website, Best gaming site Silentkillerop, Silentkillerop strategies, Gaming tips by Silentkillerop, Silentkillerop community, Silentkillerop gaming hub, Silentkillerop blog, Silentkillerop latest updates, Silentkillerop game guides, Silentkillerop cheats, Silentkillerop walkthroughs, Silentkillerop reviews, Silentkillerop tutorials, Silentkillerop esports, Silentkillerop multiplayer games, Silentkillerop player support, Silentkillerop forums, Silentkillerop competitive gaming, Silentkillerop news, Silentkillerop online community, Silentkillerop gaming tips and tricks, Silentkillerop live streams, Silentkillerop exclusive content, Silentkillerop play, Silentkillerop win, Silentkillerop strategies, Silentkillerop gaming news, Silentkillerop pro tips, Silentkillerop gameplay, Silentkillerop insights, Silentkillerop team, Silentkillerop achievements, Silentkillerop victories, Silentkillerop challenges, Silentkillerop success, Silentkillerop elite gaming, Silentkillerop rank, Silentkillerop leaderboard, Silentkillerop global, Silentkillerop professional gaming, Silentkillerop ultimate guide, Silentkillerop masterclass, Silentkillerop secrets, Silentkillerop tutorials, Silentkillerop stream, Silentkillerop fan club, Silentkillerop enthusiasts, Silentkillerop top player, Silentkillerop official site, Silentkillerop online, Silentkillerop join, Silentkillerop sign up, Silentkillerop registration, Silentkillerop account, Silentkillerop login, Silentkillerop password, Silentkillerop access, Silentkillerop member, Silentkillerop community, Silentkillerop discussion, Silentkillerop feedback, Silentkillerop suggestions, Silentkillerop contact, Silentkillerop support, Silentkillerop help, Silentkillerop assistance, Silentkillerop FAQ, Silentkillerop terms, Silentkillerop conditions, Silentkillerop privacy, Silentkillerop policy, Silentkillerop about us, Silentkillerop mission, Silentkillerop vision, Silentkillerop values, Silentkillerop goals, Silentkillerop journey, Silentkillerop success stories, Silentkillerop testimonials, Silentkillerop recognition, Silentkillerop awards, Silentkillerop accolades.",
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
