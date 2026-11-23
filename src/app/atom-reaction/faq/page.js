import { PlayButton, GuideLinks, FaqList, FaqJsonLd } from "@/components/AtomPage";

export const metadata = {
  title: "Atom Reaction FAQ",
  description: "Answers to common questions about Atom Reaction: cost, player count, bots, Battle Royale, accounts and installing the game.",
  alternates: { canonical: "/atom-reaction/faq" },
};

export default function Page() {
  return (
    <main className="prose-page prose-page--wide">
      <FaqJsonLd />
      <p className="prose-meta">Atom Reaction guide</p>
      <h1>Atom Reaction FAQ</h1>
      <p>Quick answers to the questions players ask most.</p>
      <FaqList />
      <PlayButton />
      <GuideLinks exclude="/atom-reaction/faq" />
    </main>
  );
}
