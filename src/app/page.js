import Link from "next/link";
import { PlayButton, GuideLinks, FaqList, FaqJsonLd } from "@/components/AtomPage";

export const metadata = {
  title: { absolute: "Atom Reaction: Free Online Strategy Game, Rules and Guides | SilentKillerOP" },
  description:
    "Atom Reaction is a free online multiplayer strategy game. Learn the rules, read strategy guides and play with friends or bots in your browser, no download needed.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="prose-page prose-page--wide">
      <FaqJsonLd />
      <p className="prose-meta">Free browser game by Swapnil Shah</p>
      <h1>Atom Reaction: the free online atom strategy game</h1>
      <p>
        Atom Reaction is a turn-based strategy game for two to sixteen players. You place orbs on a grid, and when a cell
        holds too many orbs it explodes, spreading to its neighbours and turning them to your colour. Those neighbours can
        explode in turn, which is where the chain reactions come from. The last player with orbs on the board wins.
      </p>
      <p>
        It runs in any browser on phone, tablet or computer. There is nothing to download and no account is needed. Play
        online with friends by sharing a room link, practise against computer players, or try Battle Royale mode where the
        board keeps shrinking.
      </p>
      <PlayButton />

      <h2>What makes it fun</h2>
      <ul>
        <li><strong>Easy to learn.</strong> The whole rule set fits in a minute: place an orb, reach critical mass, explode.</li>
        <li><strong>Deep to master.</strong> Strong players plan chains several moves ahead and set traps in their own corners.</li>
        <li><strong>Quick matches.</strong> A small board finishes in a few minutes, a large group board makes a longer party game.</li>
        <li><strong>Play your way.</strong> Online rooms, pass and play on one device, four bot levels and a new daily puzzle.</li>
      </ul>

      <h2>The rules in short</h2>
      <p>
        Every cell can hold a limited number of orbs before it explodes. That limit, called critical mass, equals the
        number of neighbours the cell has: 2 for a corner, 3 for an edge and 4 for any inner cell. On your turn you add one
        orb to an empty cell or to a cell that already holds your colour. If the cell reaches its limit it explodes and
        sends one orb to each neighbouring cell, and every orb that lands changes to your colour. Read the{" "}
        <Link href="/atom-reaction/how-to-play">full rules with a worked example</Link>.
      </p>

      <h2>Ways to play</h2>
      <ul>
        <li><strong>Play with friends online.</strong> Create a room, share the code in any chat and start when everyone has joined. Up to 16 players, with a timer on every turn and bots that step in when someone leaves.</li>
        <li><strong>Play against the computer.</strong> Four levels from Easy to Nightmare, so there is a challenge for beginners and experts alike.</li>
        <li><strong>Pass and play.</strong> Share one phone or laptop with a friend for a quick two player game.</li>
        <li><strong>Battle Royale.</strong> Whole rows and columns burn away as the match goes on, forcing a decisive finish.</li>
        <li><strong>Daily puzzle.</strong> One fresh challenge a day, the same for everyone.</li>
      </ul>
      <p>See every mode in detail on the <Link href="/atom-reaction/modes">game modes page</Link>.</p>

      <h2>Want to win more?</h2>
      <p>
        The biggest improvement for new players is counting. Before you place an orb, work out how many more orbs each
        nearby cell needs to explode, and never stack a cell next to an opponent&apos;s loaded cell. Our{" "}
        <Link href="/atom-reaction/strategy">strategy guide</Link> collects ten tips for every stage of the game.
      </p>

      <GuideLinks />

      <h2>Frequently asked questions</h2>
      <FaqList />

      <h2>About this site</h2>
      <p>
        SilentKillerOP is a personal project by Swapnil Shah, a software developer from Mumbai. Atom Reaction, Dice Chess
        and Ultimate Tic Tac Toe are games I built and host myself. See <Link href="/games">all my games</Link>, my{" "}
        <Link href="/projects">developer projects</Link>, my <Link href="/videos">gameplay and chess videos</Link>, or{" "}
        <Link href="/about">read more about me</Link>. Questions or bug reports are welcome on the{" "}
        <Link href="/contact">contact page</Link>.
      </p>
      <PlayButton>Start a game now</PlayButton>
    </main>
  );
}
