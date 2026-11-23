import Videogrid from "@/components/VideoGrid";

export const metadata = {
  title: "Gameplay, Chess and TDM Videos",
  description: "BGMI gameplay, TDM and drill videos and chess shorts from SilentKillerOP.",
  alternates: { canonical: "/videos" },
};

export default function Videos() {
  return <Videogrid playlist="all" />;
}
