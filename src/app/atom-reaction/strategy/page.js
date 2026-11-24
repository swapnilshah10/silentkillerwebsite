import Link from "next/link";
import { PlayButton, GuideLinks } from "@/components/AtomPage";

export const metadata = {
  title: "Atom Reaction Strategy: 10 Tips to Win More Games",
  description: "Ten practical Atom Reaction strategy tips: count critical mass, take corners, avoid loaded neighbours, time your chains and survive Battle Royale.",
  alternates: { canonical: "https://atomreaction.in/chain-reaction-strategy" },
};

export default function Page() {
  return (
    <main className="prose-page prose-page--wide">
      <p className="prose-meta">Atom Reaction guide · updated 23 November 2026</p>
      <h1>Atom Reaction strategy: 10 tips to win more games</h1>
      <p>
        Atom Reaction looks like luck for the first few games and turns into a game of counting and timing after that. These
        ten tips come from many hours of playing against friends and the built-in bots. If you are new, read the{" "}
        <Link href="/atom-reaction/how-to-play">rules</Link> first.
      </p>

      <h2>Know the numbers</h2>
      <p>
        A cell explodes when it holds as many orbs as it has neighbours: 2 in a corner, 3 on an edge and 4 in the middle.
        When it explodes it sends one orb to each neighbour, and every orb that lands there becomes yours.
      </p>
      <ol>
        <li><strong>Count before you place.</strong> For every cell near the action, work out how many more orbs it needs. Most lost games are lost to a chain the loser did not count.</li>
        <li><strong>Treat loaded cells as weapons and weak spots.</strong> A cell one orb short of exploding can start a chain for you, but it can also be flipped by an opponent&apos;s explosion landing next to it.</li>
      </ol>

      <h2>Opening</h2>
      <ol start={3}>
        <li><strong>Take corners early.</strong> They need only 2 orbs, so you can arm them fast, and only two cells can ever push orbs into them.</li>
        <li><strong>Do not stack beside an opponent&apos;s loaded cell.</strong> Their explosion lands in yours, flips your orbs and can start a chain that eats your whole group.</li>
      </ol>

      <h2>Middle game</h2>
      <ol start={5}>
        <li><strong>Spread before you stack.</strong> Several small groups are harder to flip than one large one.</li>
        <li><strong>Check what a chain gives away.</strong> Before you fire, trace the explosions. A chain that leaves a loaded cell next to an opponent can lose you more than it wins.</li>
        <li><strong>Keep loaded cells apart from theirs.</strong> If two loaded cells touch, whoever moves first usually wins the exchange, so avoid creating that contact on your own turn.</li>
      </ol>

      <h2>Endgame</h2>
      <ol start={8}>
        <li><strong>Count orbs, not cells.</strong> A player with no orbs is out. Flipping an opponent&apos;s last orbs removes them from the game.</li>
        <li><strong>In multiplayer, do not be the closest target.</strong> Let the two strongest players trade explosions while you build a safe position in a quiet corner.</li>
      </ol>

      <h2>Battle Royale</h2>
      <ol start={10}>
        <li><strong>Watch the collapse counter.</strong> Rows and columns burn away every few turns and everything on them vanishes. Keep your orbs toward the middle and avoid loading a cell on the edge of a line that is about to go.</li>
      </ol>

      <h2>How to practise</h2>
      <p>
        Start against the Easy bot to learn the numbers. Move to Medium or Hard once you stop losing to chains you did not
        see, and use Nightmare as the test. Then play friends. After a game you can step back through every move to find the
        turn where it went wrong, which is the fastest way to improve.
      </p>

      <PlayButton>Put these tips into practice</PlayButton>
      <GuideLinks exclude="/atom-reaction/strategy" />
    </main>
  );
}
