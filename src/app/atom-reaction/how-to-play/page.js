import Link from "next/link";
import { PlayButton, GuideLinks } from "@/components/AtomPage";

export const metadata = {
  title: "How to Play Atom Reaction: Rules and Critical Mass",
  description: "Learn the rules of Atom Reaction: critical mass for corners, edges and inner cells, how explosions chain, and how to win. Includes a worked example.",
  alternates: { canonical: "https://atomreaction.in/how-to-play" },
};

export default function Page() {
  return (
    <main className="prose-page prose-page--wide">
      <p className="prose-meta">Atom Reaction guide</p>
      <h1>How to play Atom Reaction</h1>
      <p>
        Atom Reaction is easy to start and hard to master. This page explains every rule, with a worked example so you can
        see exactly how a chain reaction unfolds. When you are ready, <a href="https://atomreaction.silentkillerop.me" target="_blank" rel="noopener noreferrer">open the game</a> and
        try it.
      </p>

      <h2>The goal</h2>
      <p>
        Take over the whole board. You win when every orb left on the grid belongs to you. A player who has no orbs left
        after everyone has had their first turn is out of the game, so the match always ends with one player standing.
      </p>

      <h2>The board and the players</h2>
      <p>
        The game is played on a rectangular grid of cells. Each player has a colour. Two to sixteen players can share one
        board, and the grid size can be chosen to suit the group: a small board for a quick two player game, a large one
        for a big party. Players take turns in a fixed order, and in online games every turn has a timer so nobody is kept
        waiting.
      </p>

      <h2>Your turn</h2>
      <p>On your turn you must add exactly one orb to a cell. You may choose:</p>
      <ul>
        <li>any empty cell, or</li>
        <li>any cell that already contains orbs of your own colour.</li>
      </ul>
      <p>You cannot place an orb in a cell that currently holds an opponent&apos;s orbs.</p>

      <h2>Critical mass</h2>
      <p>
        Every cell can hold only a limited number of orbs. This limit is the cell&apos;s critical mass, and it equals the
        number of neighbouring cells it touches (up, down, left and right, not diagonals).
      </p>
      <ul>
        <li><strong>Corner cells</strong> have 2 neighbours, so they explode when they reach 2 orbs.</li>
        <li><strong>Edge cells</strong> have 3 neighbours, so they explode at 3 orbs.</li>
        <li><strong>Inner cells</strong> have 4 neighbours, so they explode at 4 orbs.</li>
      </ul>
      <p>
        A cell that is one orb away from exploding is called <em>loaded</em>. Loaded cells are both your best weapons and
        your biggest weaknesses.
      </p>

      <h2>Explosions and chain reactions</h2>
      <p>
        When a cell reaches critical mass it explodes. It empties itself and sends one orb to each of its neighbours. Every
        orb that arrives in a neighbouring cell becomes your colour, even if that cell belonged to an opponent. If the
        arrival pushes a neighbour to its own critical mass, that cell explodes too, and so on. One move can sweep across
        most of the board, flipping dozens of orbs.
      </p>

      <h2>A worked example</h2>
      <p>
        Imagine a corner cell that already holds one of your orbs, and the two cells next to it each hold two of your
        orbs (an edge cell needs 3). You add an orb to the corner. The corner now holds 2 orbs, which is its critical mass,
        so it explodes and sends one orb to each of its two neighbours. Both edge cells now hold 3 orbs, which is their
        critical mass, so they explode as well and each pushes orbs outward to their neighbours, converting any opposing
        orbs they touch. One placed orb has turned into a wave across the corner of the board.
      </p>

      <h2>Winning and elimination</h2>
      <p>
        Keep an eye on orb counts rather than cell counts. A player who loses their last orb is eliminated, and flipping
        an opponent&apos;s final orbs is the quickest way to remove them. With three or more players you also have to decide
        whom to attack: becoming the closest target usually means becoming the next player to be eliminated.
      </p>

      <h2>Battle Royale rule changes</h2>
      <p>
        In Battle Royale mode the board shrinks. After a set number of turns, one to four whole rows or columns burn away
        and the board closes up. Anything on them vanishes, and cells beside the gap become neighbours. Read more on the{" "}
        <Link href="/atom-reaction/modes">game modes page</Link>.
      </p>

      <PlayButton>Try it in your browser</PlayButton>
      <GuideLinks exclude="/atom-reaction/how-to-play" />
    </main>
  );
}
