import Link from "next/link";
import { PlayButton, GuideLinks } from "@/components/AtomPage";

export const metadata = {
  title: "Atom Reaction Game Modes: Online, Bots, Battle Royale",
  description: "Every Atom Reaction mode explained: online rooms for up to 16 players, four bot levels, pass and play, the daily puzzle and Battle Royale.",
  alternates: { canonical: "/atom-reaction/modes" },
};

export default function Page() {
  return (
    <main className="prose-page prose-page--wide">
      <p className="prose-meta">Atom Reaction guide</p>
      <h1>Atom Reaction game modes</h1>
      <p>
        The same simple rules support several very different ways to play. Here is what each mode is, who it suits and how
        to get the most from it.
      </p>

      <h2>Online rooms with friends</h2>
      <p>
        Create a room, choose a nickname, board size and number of players (2 to 16), then share the room code or invite
        link in any chat app. Friends open the link and join, and the host starts the match. Each turn has a one minute
        timer, and if a player disconnects the host can turn them into a bot so the game does not stall. After a match you
        can share a replay. People who arrive late can watch a live game as spectators and chat in the room.
      </p>

      <h2>Play against the computer</h2>
      <ul>
        <li><strong>Easy</strong> looks two moves ahead and sometimes plays a weaker move. It is good for learning.</li>
        <li><strong>Medium</strong> looks two moves ahead and always plays its best option.</li>
        <li><strong>Hard</strong> looks four moves ahead.</li>
        <li><strong>Nightmare</strong> also looks four moves ahead but judges the board more strongly. It is the hardest to beat.</li>
      </ul>
      <p>
        You can also mix humans and bots on one device, up to 16 seats, which is useful for practising multiplayer
        situations on your own.
      </p>

      <h2>Pass and play</h2>
      <p>
        Two or more people share a single phone, tablet or laptop and take turns. It needs no network connection once the
        page has loaded and a small board finishes in a few minutes, which makes it ideal for a break.
      </p>

      <h2>Battle Royale</h2>
      <p>
        After every active player has taken a set number of turns, between one and four whole rows or columns, chosen at
        random from anywhere on the board, burn away. The board then closes up, so cells on either side of the gap become
        neighbours. Cells that lose neighbours also lose orbs they can no longer hold. The collapse itself does not trigger
        a chain reaction, but the new shape of the board often sets one up for the next player. The host controls how many
        turns pass between collapses, how many lines go each time, and whether the pace speeds up towards sudden death.
        Battle Royale suits groups of four to sixteen on a large board. Pair it with the{" "}
        <Link href="/atom-reaction/strategy">strategy guide</Link> to learn how to survive the shrinking board.
      </p>

      <h2>Daily puzzle</h2>
      <p>
        A new puzzle appears every day and is the same for everyone, so you can compare solutions with friends. It is a
        short, focused way to practise spotting chain reactions.
      </p>

      <h2>Play it like an app</h2>
      <p>
        Atom Reaction can be added to your home screen. On Android, choose Install app in Chrome. On iPhone and iPad, open
        the site in Safari, tap Share and choose Add to Home Screen. It then opens full screen, updates itself, and works
        on older phones because it is a light web page rather than a large download.
      </p>

      <PlayButton>Pick a mode and play</PlayButton>
      <GuideLinks exclude="/atom-reaction/modes" />
    </main>
  );
}
