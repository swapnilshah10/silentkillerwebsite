export const metadata = {
  title: "Free Browser Games",
  description: "Play Atom Reaction, Dice Chess and Ultimate Tic Tac Toe free in your browser. Rules, tips and links to play.",
  alternates: { canonical: "/games" },
};

const games = [
  {
    name: "Atom Reaction",
    href: "https://atomreaction.silentkillerop.me",
    tag: "Multiplayer strategy",
    body: [
      "Atom Reaction is an online multiplayer take on the classic chain-reaction board game. Players take turns placing orbs on a grid. Every cell has a critical mass: when a cell fills up it explodes, sending one orb to each neighbouring cell and converting them to your colour. Those neighbours can explode in turn, which is where the chain reactions come from.",
      "You win by eliminating every opposing orb. Create a room, share the link with friends, or jump into Battle Royale, where the playable area keeps collapsing and the last player standing wins. Sign in with Google if you want a profile, a game history and a place on the leaderboard, or just play as a guest.",
      "Tip: corner cells need only two orbs to explode, so they are cheap to trigger but easy for an opponent to disrupt. Build a stable corner and let it set off waves across the board.",
    ],
  },
  {
    name: "Dice Chess",
    href: "https://dicechess.silentkillerop.me",
    tag: "Chess variant",
    body: [
      "Dice Chess keeps the board and pieces of normal chess but adds a roll of the dice to every turn. The dice decide which type of piece you are allowed to move, so you can no longer plan a perfect line in advance. You have to adapt to what the roll gives you.",
      "It rewards flexible thinking: a great plan can be stalled by a bad roll, and a quiet position can suddenly turn tactical. It is a good way to play chess with friends who find regular games too predictable.",
      "Tip: keep several pieces of different types developed and protected, so almost any roll gives you a useful move.",
    ],
  },
  {
    name: "Ultimate Tic Tac Toe",
    href: "https://ultimatetictactoe.silentkillerop.me",
    tag: "Strategy classic",
    body: [
      "Ultimate Tic Tac Toe is played on nine small tic-tac-toe boards arranged in a 3x3 grid. Where you play inside a small board decides which small board your opponent must play in next. Win three small boards in a row on the big grid to win the game.",
      "The sent-to-board rule is what makes it deep. A move that wins locally can hand your opponent a strong position elsewhere, so every turn is a balance between your board and the one you are sending them to. If you are sent to a board that is already finished, you may choose any open board.",
      "Tip: avoid sending your opponent to a board where they already have two in a row.",
    ],
  },
];

export default function Games() {
  return (
    <main className="prose-page prose-page--wide">
      <h1>Free Browser Games</h1>
      <p>Three small games I built and host myself. They run in any modern browser, on desktop and mobile, with no download and no sign-up needed.</p>

      {games.map((g) => (
        <section key={g.name} className="game-block">
          <p className="prose-meta">{g.tag}</p>
          <h2>{g.name}</h2>
          {g.body.map((t, i) => <p key={i}>{t}</p>)}
          <p><a className="game-link" href={g.href} target="_blank" rel="noopener noreferrer">Play {g.name} &rarr;</a></p>
        </section>
      ))}

      <p>Found a bug or have an idea for a new game? Use the <a href="/contact">contact page</a>.</p>
    </main>
  );
}
