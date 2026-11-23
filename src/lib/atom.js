export const PLAY_URL = "https://atomreaction.silentkillerop.me";

export const faqs = [
  { q: "Is Atom Reaction free?", a: "Yes. It is free to play in any modern browser on phone, tablet or computer. There is nothing to download and you do not need an account." },
  { q: "How many players can play?", a: "Two to sixteen players can share one board, online or on a single device. Empty seats can be filled by computer players." },
  { q: "How does a cell explode?", a: "A cell explodes when it holds as many orbs as it has neighbours. Corner cells have 2 neighbours, edge cells 3 and inner cells 4. An explosion sends one orb to every neighbour and turns those cells to the exploding player's colour." },
  { q: "How do I win?", a: "You win by being the last player with orbs on the board. A player who loses all their orbs after the first round of turns is out of the game." },
  { q: "Can I play against the computer?", a: "Yes. There are four levels: Easy, Medium, Hard and Nightmare. Easy is good for learning the numbers and Nightmare looks several moves ahead." },
  { q: "What is Battle Royale mode?", a: "A mode where whole rows and columns of the board burn away every few turns. The board closes up, the playable area shrinks and the last player standing wins." },
  { q: "Do I need to sign in?", a: "No. You can play as a guest. Signing in with Google is optional and adds a profile, game history and a leaderboard place." },
  { q: "Can I install it like an app?", a: "Yes. On Android use the Install app option in Chrome, on iPhone use Share, then Add to Home Screen. It then opens full screen like a normal app." },
];

import { articles } from "./articles";

export const guides = [
  { href: "/atom-reaction/how-to-play", title: "How to play", blurb: "The complete rules, critical mass numbers and a worked example of a chain reaction." },
  { href: "/atom-reaction/strategy", title: "Strategy guide", blurb: "Ten practical tips for the opening, middle game, endgame and Battle Royale." },
  { href: "/atom-reaction/modes", title: "Game modes", blurb: "Online rooms, bots, pass and play, daily puzzle and Battle Royale explained." },
  { href: "/atom-reaction/faq", title: "FAQ", blurb: "Quick answers about players, bots, accounts and installing the game." },
  ...articles.map((a) => ({ href: `/atom-reaction/${a.slug}`, title: a.h1.replace(/^Atom Reaction /, "").replace(/^./, (c) => c.toUpperCase()), blurb: a.blurb })),
];
