export const articles = [
  {
    slug: "opening-moves",
    title: "Atom Reaction Opening Moves: How to Start Strong",
    h1: "Atom Reaction opening moves",
    description: "The first five turns decide more Atom Reaction games than people expect. Learn where to place your first orbs, why corners matter and what to avoid.",
    blurb: "Where to place your first orbs and what to avoid in the first five turns.",
    intro: "Most Atom Reaction games are decided before the first big explosion. The opening is quiet, but the position you build in the first few turns decides who controls the middle game. This guide covers where to place your first orbs and why.",
    sections: [
      { h: "Why the opening matters", p: [
        "Every cell can hold only as many orbs as it has neighbours, so the board is full of small, cheap explosions waiting to happen. In the opening nobody has loaded cells yet, which means nobody can punish a mistake straight away. That is exactly why the opening is the best time to build structure instead of chasing quick flips.",
        "A player who spends the first turns scattering orbs randomly usually discovers around turn six that every cell they own sits next to an opponent's loaded cell. A player who plans their first orbs usually owns safe, loaded corners at the same point."] },
      { h: "Start in a corner", p: [
        "A corner cell has only two neighbours, so it explodes at two orbs. That makes it the cheapest cell on the board to load, and only two other cells can ever send orbs into it. Placing your first orb in a corner is almost always correct.",
        "On your second turn, add a second orb to a different corner or begin an edge cell beside your first corner. Having two separate corner positions gives you options and makes it harder for one opponent explosion to wipe out everything you own."] },
      { h: "Keep distance from your opponent", p: [
        "Orbs placed next to an opponent's orbs are not dangerous while their cells are empty, but they become dangerous the moment their cell is loaded. A cell that is one orb short of exploding next to your orb is a threat: they place one orb, the cell explodes, and your neighbouring orb flips to their colour and may join a chain.",
        "In the opening, keep at least one empty cell between your groups and theirs. If you are forced to be adjacent, make sure your cell is the one that will load first."] },
      { h: "Do not rush to load", p: [
        "A loaded cell is a weapon, but it is also a target. Loading too early tells your opponent exactly where your weak point is and invites them to build a counter-position next to it. Loading in response to their move, when you can immediately fire, is much stronger than loading in advance and hoping.",
        "As a rule of thumb, load a cell only when you can fire it on your next turn, or when no opponent cell is close enough to threaten it."] },
      { h: "Opening checklist", ul: [
        "Place your first orb in a corner.",
        "Spread across two corners before stacking either.",
        "Keep an empty cell between your groups and your opponent's.",
        "Never place beside a loaded opponent cell unless you can fire first.",
        "Count how many orbs each nearby cell needs before every move."] },
    ],
  },
  {
    slug: "corner-strategy",
    title: "Corner Strategy in Atom Reaction: Cheap, Safe and Powerful",
    h1: "Corner strategy in Atom Reaction",
    description: "Corners explode at two orbs and have only two attackers. Learn how to build, protect and fire corner positions to win Atom Reaction games.",
    blurb: "Why corners are the strongest cells and how to build chains out of them.",
    intro: "The four corners of the board are the most valuable real estate in Atom Reaction. They are cheap to load, hard to attack and ideal launch points for chain reactions. Here is how to make the most of them.",
    sections: [
      { h: "The maths of a corner", p: [
        "A corner cell touches only two other cells, so its critical mass is two. It explodes the moment it holds two orbs. An inner cell needs four, so a corner is twice as cheap to arm.",
        "Corners are also hard to attack. Only the two neighbouring cells can push orbs into a corner, so an opponent has to be right beside it to flip it. That makes a corner a naturally safe place to keep orbs."] },
      { h: "The one-orb corner", p: [
        "A corner holding one orb of yours is a loaded cell: one more orb and it fires. This is the simplest and most reliable weapon in the game. Because it needs just one more orb, you can wait until the best moment, and the opponent has to treat it as a permanent threat.",
        "The cost is that a one-orb corner can be flipped by an explosion next door. If an opponent's cell beside your corner explodes, it sends an orb in and the corner is theirs. Always check the two neighbouring cells before you rely on a corner."] },
      { h: "Building a chain from the corner", p: [
        "The strongest pattern is a corner with an edge cell next to it that is also loaded. The corner fires, sends an orb into the edge cell, which reaches critical mass and fires on to the next cell, and so on along the edge.",
        "To set this up, load the edge cells before the corner, keeping the corner at one orb. Then your final orb in the corner triggers the whole line. Count the length of the chain before you start: every cell must be loaded just right, and a single gap stops the wave."] },
      { h: "Defending your corners", p: [
        "Protect a corner by keeping its two neighbours under control. If they are yours and not loaded next to an opponent, the corner is safe. If an opponent loads a cell next to your neighbour, consider firing first or moving the fight elsewhere.",
        "Do not leave a lone corner as your only position. If it flips, you can lose most of your orbs in one move."] },
      { h: "Taking an opponent's corner", p: [
        "To take a corner, you need an orb to land in it, which means exploding a neighbouring cell. Load an edge cell next to their corner and fire at the right moment. Because the flipped corner arrives as an orb of your colour and may itself reach critical mass, you can sometimes win a corner and set off a second explosion in the same move."] },
    ],
  },
  {
    slug: "common-mistakes",
    title: "Common Atom Reaction Mistakes and How to Fix Them",
    h1: "Common Atom Reaction mistakes",
    description: "The most common mistakes new Atom Reaction players make: over-stacking, ignoring loaded cells and firing chains that give the game away. And how to fix each.",
    blurb: "Seven mistakes that cost new players games, with a fix for each.",
    intro: "Almost every player makes the same handful of mistakes in their first twenty games. Spotting them in your own play is the quickest way to improve. Here are the seven that cost the most games.",
    sections: [
      { h: "1. Stacking one big group", p: [
        "A large block of your own orbs looks strong but is a single point of failure. One explosion that reaches its edge can flip a whole row and start a chain through the rest.",
        "Fix: spread your orbs across several small groups, and keep them separated by empty cells."] },
      { h: "2. Ignoring loaded opponent cells", p: [
        "Before every move, scan the board for cells one orb short of critical mass. Each one is a threat to every cell next to it. Players who skip this scan lose to the same trick again and again.",
        "Fix: make the scan a habit. Count the neighbours of your cells and ask what flips if any loaded opponent cell fires."] },
      { h: "3. Firing a chain that loads your enemy", p: [
        "A chain that flips many orbs feels great, but explosions leave cells empty and push orbs into new places. If the chain leaves a loaded cell of theirs next to a weakened group of yours, they can fire back and take more than you gained.",
        "Fix: trace the whole chain, then check what the board looks like afterwards. Fire only if the final position is safe."] },
      { h: "4. Wasting orbs in the middle", p: [
        "Inner cells need four orbs, so loading them is expensive and slow. New players often pour orbs into the centre because it feels powerful, while corners and edges are cheaper and safer.",
        "Fix: prefer corners and edges for your loaded cells and use the centre only to link chains."] },
      { h: "5. Forgetting the turn order", p: [
        "In games with three or more players, what your next opponent can do matters more than what the last one did. A cell that is safe from the player on your left may be wide open to the one on your right.",
        "Fix: look at who moves next and what they can reach, not just at the strongest opponent."] },
      { h: "6. Attacking the wrong player", p: [
        "In multiplayer, the strongest-looking attack is often not the best one. Spending your orbs knocking out a weak player lets the leader build in peace.",
        "Fix: aim at the player who is about to win, and let others weaken each other."] },
      { h: "7. Playing without reviewing", p: [
        "Players who never look back at their losses repeat the same errors. After a game, step back through the moves to the turn where the position changed and ask what you missed.",
        "Fix: use the move-by-move review after each game and find the one decision that cost you the most."] },
    ],
  },
  {
    slug: "beating-the-bots",
    title: "How to Beat the Atom Reaction Bots: Easy to Nightmare",
    h1: "Beating the Atom Reaction bots",
    description: "A guide to the four Atom Reaction bot levels, how each one thinks, and the habits that beat them. From Easy to Nightmare.",
    blurb: "How each bot level thinks and the habits that beat them.",
    intro: "The computer players in Atom Reaction come in four levels. They are a great training partner, but each one has habits you can learn to exploit. Here is how they think and how to beat them.",
    sections: [
      { h: "How the bots decide", p: [
        "A bot plays by looking ahead: it tries each possible move, imagines the opponent's replies and scores the resulting boards. The levels differ in how far they look ahead and how they score what they see.",
        "That means a bot never makes a random blunder at the higher levels. It makes only the mistakes that come from not seeing far enough ahead."] },
      { h: "Easy", p: [
        "Easy looks two moves ahead and sometimes picks a weaker move on purpose. It is designed for learning. You can beat it by loading corners and firing only when you have a clear chain.",
        "Use Easy to practise counting critical mass. If you lose to Easy, the problem is nearly always an uncounted chain."] },
      { h: "Medium", p: [
        "Medium also looks two moves ahead but always plays its best option. It will not give away free orbs, and it takes any chain that wins material.",
        "To beat Medium, set traps that need three moves to see: build a position where its obvious best move walks into a bigger chain. It sees your reply but not your reply to the reply."] },
      { h: "Hard", p: [
        "Hard looks four moves ahead, so simple traps no longer work. It punishes loaded cells next to its own groups immediately.",
        "Beat it with position, not tricks. Keep your groups separate, keep your corners loaded, and force it to spend orbs responding. Hard bots tend to trade evenly, so a small structural lead can decide the game."] },
      { h: "Nightmare", p: [
        "Nightmare looks four moves ahead like Hard but judges the board more strongly, valuing safe corners and loaded positions. It is the hardest bot to beat.",
        "Expect long games. Avoid early trades, build safe positions in several corners and wait for it to commit. Beating Nightmare consistently is a good sign that you have mastered the basics."] },
      { h: "A practice plan", ul: [
        "Play Easy until you stop losing to chains you did not count.",
        "Move to Medium and practise setting three-move traps.",
        "Play Hard on a small board and focus on structure.",
        "Use Nightmare as your final test, then challenge friends."] },
    ],
  },
  {
    slug: "multiplayer-tactics",
    title: "Multiplayer Atom Reaction Tactics for 3 to 16 Players",
    h1: "Multiplayer tactics for Atom Reaction",
    description: "Tactics for Atom Reaction games with three or more players: kingmaking, target selection, board size and how to survive a crowded board.",
    blurb: "Target selection, kingmaking and surviving a crowded board.",
    intro: "Two-player games are about calculation. Games with three or more players add politics: who you attack, who you ignore and who you let win. These tactics help in groups of any size.",
    sections: [
      { h: "Do not be the closest target", p: [
        "In a group, the player who looks most dangerous or most exposed attracts every attack. Being a little behind the leaders but not the weakest is often a stronger place to be than leading early.",
        "Build quietly in a corner, keep your orbs spread, and let others trade explosions in the centre."] },
      { h: "Choose your targets carefully", p: [
        "Attacking the player directly after you in turn order is risky because they move next and can fire back. Attacking the player two seats away is safer because someone else gets to respond first.",
        "Focus on the leader. When one player owns most of the board, every other player benefits from pulling them down."] },
      { h: "Board size and player count", p: [
        "More players need more room. As a rough guide, use a small board for two players, a medium board for three or four, and a large one for six or more. On a cramped board, early explosions chain across everyone at once and the game ends in a few turns.",
        "Large boards slow things down, give corners more value and reward patience."] },
      { h: "Dealing with eliminations", p: [
        "When a player is eliminated, their orbs are gone and the board becomes more open. Gaps change which cells are neighbours of loaded cells, so re-check your safe positions after every elimination.",
        "Eliminated players can watch the rest of the game, which is a good way to learn how strong players think."] },
      { h: "When someone leaves", p: [
        "In online games, a disconnected player can be replaced by a bot so the match continues. The bot takes over their orbs and plays on, so do not count their position as dead. If the host removes a player, treat their cells as fair game."] },
    ],
  },
  {
    slug: "battle-royale-guide",
    title: "Atom Reaction Battle Royale: Survival Guide",
    h1: "Atom Reaction Battle Royale survival guide",
    description: "Battle Royale mode shrinks the Atom Reaction board as the match goes on. Learn how the collapse works and how to survive until the end.",
    blurb: "How the shrinking board works and how to be the last one standing.",
    intro: "Battle Royale turns Atom Reaction into a race against a shrinking board. Rows and columns burn away every few turns, and anything on them disappears. Here is how the mode works and how to stay alive.",
    sections: [
      { h: "How the collapse works", p: [
        "After every active player has taken a set number of turns, between one and four whole rows or columns burn away. They are chosen at random from anywhere on the board. The board then closes up, so cells on either side of the gap become neighbours.",
        "Cells that lose neighbours also lose the orbs they can no longer hold. The collapse does not trigger a chain reaction by itself, but the new shape of the board can set one up for whoever moves next."] },
      { h: "Watch the counter", p: [
        "The game shows how many turns remain until the next collapse. Treat it like a clock. Before it hits zero, stop investing in cells that could be on a burning line, and think about what the board will look like after.",
        "Because lines are random, nothing is completely safe. The middle of the board is statistically safer than the edges only because it has fewer ways to be split."] },
      { h: "Plan for the gap", p: [
        "When a row or column goes, cells that were separated become neighbours. A cell that was safely far from an opponent's loaded cell may suddenly sit next to it. Before the counter reaches zero, check which cells would become adjacent and make sure you are not the one stuck next to a loaded enemy.",
        "The opposite also works: you can use the gap to set up a chain, loading a cell that will become next to an opponent's weakly held group just after the collapse."] },
      { h: "Use the settings", p: [
        "The host can change how many turns pass between collapses, how many lines go each time and whether the pace speeds up towards sudden death. A slow constant pace suits careful players. An accelerating pace creates frantic endgames.",
        "Battle Royale works best with four to sixteen players on a large board. Try it against bots first to learn the rhythm."] },
      { h: "Endgame survival", p: [
        "When the board is small and few players remain, every cell matters. Count orbs, not cells, keep your loaded corners and avoid starting chains that leave you exposed. The last player with orbs on the board wins, and the collapse guarantees the game ends."] },
    ],
  },
];

export const getArticle = (slug) => articles.find((a) => a.slug === slug);
