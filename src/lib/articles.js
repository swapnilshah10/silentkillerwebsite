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

  {
    slug: "two-player-strategy",
    title: "Atom Reaction Two Player Strategy: Winning Head to Head",
    h1: "Two player strategy for Atom Reaction",
    description: "How to win Atom Reaction one on one: tempo, corner control, forcing exchanges and the endgame when only two players remain.",
    blurb: "Tempo, forcing exchanges and corner control in head-to-head games.",
    intro: "A two player game of Atom Reaction is a pure calculation duel. There is no third player to blame and nobody to hide behind, so every decision either gains or loses ground. This guide covers the ideas that matter most when it is just you and one opponent.",
    sections: [
      { h: "Tempo is everything", p: [
        "With two players, turns alternate strictly, so the idea of tempo becomes clear. A move that forces your opponent to respond gains you a turn, because they spend their move reacting instead of building. A move that creates no threat gives them a free move.",
        "Loading a cell next to an opponent group is a tempo move: they must either fire first, flip the cell or give up the group. Look for moves that create a threat and also improve your position, and avoid moves that do neither."] },
      { h: "Who fires first wins the exchange", p: [
        "When two loaded cells touch, the player who moves first usually wins, because their explosion lands in the other loaded cell, flips it and often keeps the chain going. This means that creating contact between loaded cells on your own turn is usually a mistake: you hand the first shot to your opponent.",
        "Instead, aim to create contact on your opponent's turn. If they must place an orb that loads a cell next to yours, you fire first. Zugzwang-like positions, where any move helps the other side, appear often in small two player games."] },
      { h: "Trade only when you come out ahead", p: [
        "Chains that flip many orbs feel decisive, but a trade where both players lose roughly the same number of orbs usually favours whoever has the safer remaining position. Before you start a chain, imagine the board after the last explosion and ask who has loaded cells, who has safe corners and whose move it is.",
        "If the answer is not clearly you, find a quieter move that keeps the tension and lets your opponent run out of safe moves."] },
      { h: "Control the corners", p: [
        "In two player games the four corners decide most tight matches. A player who owns two or three loaded corners can pick the moment to fire, while the other must constantly check every neighbour. Read the corner strategy guide for the details, and remember that your opponent is trying to flip your corners with an explosion next door."] },
      { h: "The endgame", p: [
        "When both players have few orbs left, count carefully. The player who runs out of safe moves first loses, so protect your reserve of moves: orbs in a safe cell that can be added to without risk. A single reserve move can be the difference between winning and being forced into a bad explosion."] },
    ],
  },
  {
    slug: "reading-the-board",
    title: "How to Read the Board in Atom Reaction: A Threat Checklist",
    h1: "Reading the board in Atom Reaction",
    description: "A simple routine to scan the board before every move in Atom Reaction: find loaded cells, count neighbours and predict chains before they happen.",
    blurb: "A simple scan routine to spot threats and chains before they happen.",
    intro: "Strong Atom Reaction players are not faster or luckier than beginners. They are better at reading the board. They run the same quick scan before every move and almost never get surprised. Here is that scan, step by step.",
    sections: [
      { h: "Step 1: find every loaded cell", p: [
        "A loaded cell is one orb short of critical mass. Start by scanning the whole board for them, both yours and your opponents'. Loaded cells are where explosions come from, so they tell you where the next action will be.",
        "Remember the thresholds: a corner is loaded at one orb, an edge cell at two, and an inner cell at three. New players often overlook edge cells holding two orbs, which are one move from firing."] },
      { h: "Step 2: draw the blast lines", p: [
        "For each loaded opponent cell, picture an explosion. Which four (or three, or two) neighbours receive an orb? Those cells will turn to the opponent's colour. If any of them is yours, you will lose it.",
        "Then ask whether the receiving cells would themselves reach critical mass. If so, the explosion continues. Follow it until it stops. This is the chain you must prevent or exploit."] },
      { h: "Step 3: check your own safe cells", p: [
        "Mark which of your cells are safe: not next to any loaded opponent cell and not reachable by a chain. Those are your anchors. The cells that are not safe are the ones you must protect, fire or abandon."] },
      { h: "Step 4: list your candidate moves", p: [
        "Now think about what you could do. Typical candidates are firing a loaded cell, loading a new one, reinforcing a threatened cell or placing a quiet orb in a safe corner. For each, run the scan again on the position that would result and see what your opponent can do in reply.",
        "You will quickly reject most candidates. The two or three that survive are usually the real choice."] },
      { h: "Step 5: look one move beyond", p: [
        "The final check is what your best move enables. Does it unload one of your cells and leave a gap? Does it push your orbs next to a cell your opponent can load? A move that looks safe but sets up their best reply is a mistake you only see if you look one step further."] },
      { h: "Make it a habit", p: [
        "At first the scan takes a minute. After twenty games it takes a few seconds and happens almost automatically. Practise it against the Easy bot, where mistakes are cheap, until it becomes second nature."] },
    ],
  },
  {
    slug: "trap-patterns",
    title: "Atom Reaction Trap Patterns: Setting Up Chains That Win",
    h1: "Trap patterns in Atom Reaction",
    description: "Learn classic Atom Reaction traps: the decoy corner, the delayed fuse and the forced capture. How to set them and how to avoid falling for them.",
    blurb: "The decoy corner, the delayed fuse and the forced capture.",
    intro: "Traps turn a good position into a winning one. A trap in Atom Reaction is a position where an obvious-looking move for your opponent walks into a bigger chain than they can see. Here are the patterns that come up most often, and how to defend against each.",
    sections: [
      { h: "The decoy corner", p: [
        "Leave a corner holding one orb of your colour, apparently free for the taking. An opponent who flips it by exploding the cell next door changes the corner to their colour, but the corner is now loaded in a position where you can fire into it. Your explosion flips it back and often the cell they used to attack from.",
        "The decoy works because the opponent sees one cell and not what surrounds it. To avoid it, check the neighbours of every capture before you take it."] },
      { h: "The delayed fuse", p: [
        "Build a line of cells that are each one orb short of critical mass, with the first cell touching a corner you hold at one orb. A single orb in that corner fires the whole line in one move. It is called a fuse because nothing happens until you light it, and the opponent often does not notice how long the line is.",
        "Defend by breaking long lines early. If an opponent builds a row of loaded cells, take one of them or add an orb in a position that will absorb the explosion safely."] },
      { h: "The forced capture", p: [
        "Create a position where your opponent's best move is to capture a cell, and that capture sets off their own loaded cell next to your much bigger chain. The capture feels natural but leaves them exposed. This usually needs a three move calculation, which is why it works so well against the lower bot levels.",
        "To avoid it, ask before every capture what the board looks like afterwards, not only what you win."] },
      { h: "The sacrifice", p: [
        "Sometimes giving up a few orbs wins the game. If your opponent flips a small group of yours and in doing so loads a cell next to a chain of yours, you can fire first and take back far more. Sacrifices work when you have counted the whole sequence, and fail spectacularly when you have not, so use them only when the arithmetic is clear."] },
      { h: "Defending against traps", ul: [
        "Run the full board scan before every capture.",
        "Treat any free-looking orb as suspicious.",
        "Break long lines of loaded cells early.",
        "Keep a spare safe move in reserve so you are never forced into a bad capture."] },
    ],
  },
  {
    slug: "endgame-guide",
    title: "Atom Reaction Endgame Guide: Closing Out the Win",
    h1: "Atom Reaction endgame guide",
    description: "How to convert a winning position in Atom Reaction and survive a losing one: counting orbs, safe reserve moves and eliminating the last opponent.",
    blurb: "Count orbs, keep reserve moves and finish the last opponent.",
    intro: "Many players reach a winning position and then throw it away in the last few turns. The endgame of Atom Reaction rewards patience and counting more than any other phase. Here is how to finish games cleanly.",
    sections: [
      { h: "What counts as the endgame", p: [
        "The endgame starts when most of the board has been settled and each player has only a handful of groups left. Explosions are now rarer but far more decisive, because each one can remove a whole group and with it a player.",
        "The shift in thinking is from cells to orbs. In the endgame you win by eliminating orbs, not by owning space."] },
      { h: "Count your reserve moves", p: [
        "Because you must place an orb every turn, running out of safe moves can force you into a bad one. A reserve move is a place where you can add an orb without creating a threat for your opponent or exposing yourself. Count how many you have compared with your opponent.",
        "The player with more reserve moves can wait, forcing the other to eventually fire or load in a bad position. If you are ahead on reserves, play quiet moves and let them crack."] },
      { h: "Finishing the last opponent", p: [
        "When one opponent has just a few orbs, look for a safe way to flip all of them in one chain. A partial attack gives them a chance to rebuild, while a complete one ends the game. Prepare the chain with loaded cells first, and only fire when it reaches every remaining orb.",
        "Do not rush. A failed attack that leaves a loaded cell of theirs next to your orbs can turn a won game into a loss."] },
      { h: "When you are behind", p: [
        "Behind in orbs does not mean lost. The player with fewer orbs often has more freedom, since they have less to protect. Look for a long chain that can swing the board, and try to create contact between your loaded cells and theirs on their turn so that you fire first.",
        "Keep your best corner for the last moment. A single corner explosion at the right time can flip a surprising amount of the board."] },
      { h: "Multiplayer endgames", p: [
        "With three or more players left, do not attack the player who is behind. Let them and the leader fight. Position yourself so that when the leader weakens you are the closest to take advantage. Remember that eliminating a player changes which cells neighbour each other, so recount after every elimination."] },
    ],
  },
  {
    slug: "board-size-guide",
    title: "Choosing a Board Size in Atom Reaction",
    h1: "Choosing the right board size",
    description: "How board size changes Atom Reaction: small boards for fast games, large boards for groups, and how many players each size suits.",
    blurb: "How the grid size changes pace, tactics and player count.",
    intro: "The size of the grid changes Atom Reaction more than almost any other setting. A small board plays like a tactical puzzle, a large one like a slow strategy game. Here is how to choose a size for the game you want to play.",
    sections: [
      { h: "Small boards: fast and tactical", p: [
        "A small grid, such as six by six, finishes in a few minutes. Corners and edges make up a large share of the cells, so explosions chain quickly and mistakes are punished at once. These boards suit two players, quick breaks and mobile play.",
        "Because there is little room, openings matter less and tactics matter more. Careful counting beats planning."] },
      { h: "Medium boards: the balanced choice", p: [
        "Medium grids give each player space to build two or three groups and still meet in the middle. Games last longer, strategic ideas like corner control and trap patterns become important and a comeback is possible. This is the best size for three or four players and for serious two player games."] },
      { h: "Large boards: groups and Battle Royale", p: [
        "A large grid can hold up to thirty by twenty four cells, which is enough for groups of up to sixteen players. Early turns are quiet, players build in their own areas and only gradually come into contact. Large boards reward patience and long chains.",
        "They are also the right choice for Battle Royale, where the collapse removes rows and columns over time and the board needs room to shrink."] },
      { h: "Players per board", ul: [
        "Two players: small or medium board.",
        "Three or four players: medium board.",
        "Five to eight players: medium to large board.",
        "Nine to sixteen players: large board, ideally with Battle Royale."] },
      { h: "A quick rule of thumb", p: [
        "If a game feels over too fast, use a larger board. If it feels slow and nothing happens, use a smaller one or add Battle Royale. Experiment: the same group can enjoy very different games just by changing the grid."] },
    ],
  },
  {
    slug: "review-your-games",
    title: "How to Review Your Atom Reaction Games and Improve Faster",
    h1: "Reviewing your games to improve",
    description: "Use move-by-move replay and the post-game review in Atom Reaction to find your turning points, learn from mistakes and improve faster.",
    blurb: "Using replay and post-game review to find the move that lost the game.",
    intro: "Playing more games helps, but reviewing them helps more. Atom Reaction has tools that let you step back through a game and see where it was won or lost. Here is how to use them well.",
    sections: [
      { h: "Step back through the moves", p: [
        "After a game you can step back through every move, one at a time, from the latest position to move one. Use this to find the turn where the position changed. Most games have one or two key moments: a chain that flipped too much, a capture that opened a corner, a quiet move that was a mistake.",
        "Do not review every move. Find the turning point first, then look at the three or four moves before it."] },
      { h: "Use the post-game review", p: [
        "The post-game review grades individual moves, shows an accuracy percentage, highlights the turning point and lets you share the result. It judges moves using a computer player, so it is a useful second opinion on your own analysis.",
        "Look first at the moves marked as mistakes. Ask what the review preferred and why. Often the answer is a quieter move that kept your structure instead of a flashy chain."] },
      { h: "Ask the right questions", ul: [
        "Where was the turning point of the game?",
        "What did I miss in the board scan at that moment?",
        "Was there a safer move that kept my advantage?",
        "Did I count the opponent's reply before moving?"] },
      { h: "Analyse with an engine", p: [
        "You can also analyse a position against the built-in engine with a strength slider. Set it to a level a little above your own, replay a critical position and see which move it prefers. Over time you will start to recognise the patterns it plays."] },
      { h: "Keep a list of your mistakes", p: [
        "Most players repeat three or four mistakes. Write them down. Common examples are stacking too many orbs in one place, forgetting a loaded neighbour or firing a chain without checking the aftermath. Naming a mistake makes it much easier to notice before you make it again."] },
    ],
  },
  {
    slug: "game-night-hosting",
    title: "Hosting an Atom Reaction Game Night with Friends",
    h1: "Hosting a game night",
    description: "How to run a smooth Atom Reaction session with friends: creating a room, inviting players, spectators, chat and keeping the game moving.",
    blurb: "Rooms, invite links, spectators, chat and keeping everyone engaged.",
    intro: "Atom Reaction works well as a party game. It takes a minute to explain, supports up to sixteen players and runs in any browser. Here is how to run a good session whether you have two friends or twelve.",
    sections: [
      { h: "Set up the room", p: [
        "Create a room, choose a nickname, a board size and the number of players. Then share the room code or the invite link in your group chat. Friends open the link and join directly, with no account or download needed.",
        "Pick the board size based on the group. Smaller groups should use a medium board, and groups of eight or more should use a large one."] },
      { h: "Teach the rules in a minute", p: [
        "Explain the one rule that matters: a cell explodes when it holds as many orbs as it has neighbours. Show one explosion in the first round and most people understand immediately. Point new players to the how to play page for a refresher."] },
      { h: "Choose a mode", p: [
        "For a first game, play a normal match on a medium board. For groups who know the game, try Battle Royale, where rows and columns burn away to force a finish. Mix both across an evening so there is variety."] },
      { h: "Keep the game moving", p: [
        "Every turn has a timer, so nobody can hold the game up. If someone leaves or loses connection, the host can turn them into a bot and the match continues. Bots fill empty seats, so you can start with whoever is available."] },
      { h: "Spectators, chat and reactions", p: [
        "People who arrive late can watch a live game as spectators, and everyone in the room can chat and send quick reactions. Eliminated players can keep watching and commenting, which keeps them involved. After the game, share a replay so players can relive the best chain."] },
      { h: "Ideas for an evening", ul: [
        "Run a mini tournament: the winner of each game stays on.",
        "Play one round of Battle Royale to finish the night.",
        "Try a team game by agreeing not to attack your partner.",
        "Share the daily puzzle and compare answers."] },
    ],
  },
  {
    slug: "mobile-tips",
    title: "Playing Atom Reaction on Your Phone: Tips and Settings",
    h1: "Playing on your phone",
    description: "Make Atom Reaction run smoothly on any phone: installing it like an app, lite mode for older devices, landscape layout and turn alerts.",
    blurb: "Install it, switch on lite mode and get turn alerts on any phone.",
    intro: "Most Atom Reaction games are played on phones, and the game is built to run well on all of them, including older devices. These tips help you get the best experience on a small screen.",
    sections: [
      { h: "Install it like an app", p: [
        "On Android, open the game in Chrome and choose Install app from the settings or the browser menu. On iPhone and iPad, open the site in Safari, tap Share and choose Add to Home Screen. The game then opens full screen with its own icon, updates itself and does not need an app store."] },
      { h: "Use lite mode on older phones", p: [
        "If the game feels slow or your phone gets warm, open Settings and choose the performance option for lite mode. It reduces animations and lowers the work the board does while idle, which saves battery and keeps the game smooth on older devices."] },
      { h: "Portrait and landscape", p: [
        "In portrait, the board fills the width of the screen. In landscape, the board uses the full height and a side panel shows the players and controls. Try both. Landscape is better for large boards because you can see more cells, and portrait is easier for one-handed play."] },
      { h: "Turn alerts", p: [
        "The game can alert you when it is your turn while the tab is in the background, with a chime, a title change or a notification. This is useful in long group games where you may wait several minutes between turns. A banner also reminds you after a few seconds if you have not moved."] },
      { h: "Tapping accurately", p: [
        "On large boards the cells are small. Zoom the page slightly or use landscape if you find yourself mis-tapping. Confirm dialogs protect against accidental exits, so a stray tap rarely costs you a game."] },
      { h: "Sound and language", p: [
        "Sound settings are remembered between sessions, and the game is available in several languages including Hindi. Change the language in Settings if you play with friends who prefer another."] },
    ],
  },

  {
    slug: "how-the-backend-was-built",
    kind: "Behind the game",
    title: "How the Atom Reaction Backend Was Built: FastAPI and WebSockets",
    h1: "How the Atom Reaction backend was built",
    description: "The story of the Atom Reaction server: why FastAPI and WebSockets, how rooms live in memory, how the game engine resolves chain reactions and what I learned.",
    blurb: "FastAPI, WebSockets, in-memory rooms and a chain-resolving game engine.",
    intro: "Atom Reaction looks simple on screen, but a real-time multiplayer game needs a server that every player trusts. This is the story of how I built the backend: the choices I made, what worked, and what I would do differently.",
    sections: [
      { h: "Starting point: one server is the referee", p: [
        "In a multiplayer board game nobody should be able to cheat by editing their own browser. So the rule I started with was simple: the server owns the game. The browser sends a move, such as \"place an orb in this cell\", and the server decides whether it is legal, runs the explosions and sends the result back to everyone in the room.",
        "I chose Python with FastAPI because it handles WebSocket connections natively, is quick to write and easy to test. React and Vite sit on the front, and the same server serves the built frontend, so the whole game is one small deployable unit."] },
      { h: "Rooms live in memory", p: [
        "Each game room is a Python object holding the board, the players, whose turn it is and a timer. Keeping rooms in memory makes moves instant, because there is no database round trip on every click. The trade-off is that the server must run as a single worker process, otherwise two players in the same room could land on different workers and see different games.",
        "That constraint is fine for a game of this size, and I added a cleanup loop that removes empty rooms after five minutes and abandoned ones after a couple of hours, plus a hard cap on the number of rooms, so memory cannot grow without limit."] },
      { h: "The game engine", p: [
        "The heart of the backend is the engine that resolves a move. It places the orb, checks whether the cell has reached critical mass and, if so, explodes it, sending an orb to each neighbour and flipping them to the mover's colour. Then it repeats for every cell that has become critical, wave after wave, until the board is stable.",
        "The server does not send every intermediate board to the browser. It sends the first wave in full and then only the cells that changed in each following wave. The browser replays those waves as an animation. This keeps messages small even when a single move sets off dozens of explosions."] },
      { h: "Turns, timers and bots filling in", p: [
        "Every turn has a timer so a game cannot stall. If a player's connection drops, the server waits a short grace period and then lets a bot play for them, so the remaining players are never stuck. A player who has no legal move is eliminated automatically instead of freezing the game."] },
      { h: "Testing the engine hard", p: [
        "A game engine bug is painful because players see wrong boards. I wrote tests that play thousands of random games and check invariants after every move, for example that orb counts never go negative and no cell is above critical mass. I also compared the new engine against the old one on tens of thousands of moves to prove they matched.",
        "The same logic exists in JavaScript for pass and play and the bots, so I replay random games through both implementations and check that they agree move for move. Any mismatch is a bug in one of them."] },
      { h: "What I would do differently", p: [
        "I would add the endless-chain guard from day one (see the next post), design the room store so it could move to more than one process, and write the replay comparison tests before the second implementation, not after. But the core idea, a small authoritative server and a thin client, has held up well."] },
    ],
  },
  {
    slug: "backend-challenges-and-fixes",
    kind: "Behind the game",
    title: "Atom Reaction Backend Challenges: Endless Chains, Abuse and Stability",
    h1: "Backend challenges we faced and how we fixed them",
    description: "Real problems from running Atom Reaction: endless chain reactions, room floods, abusive traffic and hardening the server, with the fixes that worked.",
    blurb: "Endless chains, room floods, rate limits and server hardening.",
    intro: "Building a game server is one thing, keeping it healthy once strangers use it is another. These are the real problems I hit after launch and how I fixed them.",
    sections: [
      { h: "Challenge 1: a chain reaction that never ended", p: [
        "In Battle Royale mode, when the outer ring of the board collapsed, I found positions where explosions could bounce back and forth forever. The server kept resolving waves and never finished, which froze the room.",
        "The fix was two guards: loop detection that notices when the board repeats a state, and a hard cap of 200 waves per move. If either triggers, the game ends and the winner is decided by orb count, with the reason shown to players. I also changed the collapse rule so it never triggers a chain by itself, which removed the root cause."] },
      { h: "Challenge 2: players with no legal move", p: [
        "Occasionally a player had no legal move at all, and the turn logic waited for a move that could never come. Now the server detects that and eliminates the stuck player so the game continues. A related bug was a collapse that removed every remaining player, where the server used to invent a winner. The game now ends cleanly with no winner and says so."] },
      { h: "Challenge 3: abuse and floods", p: [
        "Anything on the public internet gets hammered. I added per-address rate limits on creating rooms and joining them, a limit on request body size, and a limit on chat speed. Rooms that nobody uses are cleaned up, and the total number of rooms is capped.",
        "I also moved the login token for the WebSocket from the URL into the first message, so it does not end up in logs, and restricted which websites may call the API."] },
      { h: "Challenge 4: locking the server down", p: [
        "I run the game in a container with as little power as possible: it runs as a non-privileged user, the code is read-only, extra capabilities are dropped, memory and process counts are capped and the logs rotate. The API documentation pages are turned off in production.",
        "On top of that the server sends strict security headers, including a content security policy that only allows scripts with a per-response nonce. That kills a whole class of injection attacks."] },
      { h: "Challenge 5: caching without stale pages", p: [
        "Hashed asset files are cached for a year, because their names change when their content does. The main HTML page is never cached, so players always get the latest version. Small files like the manifest and robots file are cached for a short time and revalidated. Getting this right made repeat visits fast without ever serving an old game."] },
      { h: "The lesson", p: [
        "Almost every one of these problems was invisible in testing and obvious in production. The most valuable habit I built was to log structured events for everything unusual, so that when something strange happened I could see exactly what the server did."] },
    ],
  },
  {
    slug: "frontend-challenges-phone-heat",
    kind: "Behind the game",
    title: "Atom Reaction Frontend Challenge: Fixing a Hot, Slow Canvas on Phones",
    h1: "Frontend challenge: why phones got hot and how we fixed it",
    description: "How the Atom Reaction board renderer made phones heat up, how we measured it and the fixes: cached sprites, frame pacing, lite mode and sleep after idle.",
    blurb: "Cached sprites, frame pacing and lite mode to cool down phones.",
    intro: "The first version of the Atom Reaction board looked great and made phones hot. Players noticed after ten minutes of play. This is how I found the cause and fixed it.",
    sections: [
      { h: "The symptom", p: [
        "The game drew the board on an HTML canvas. On a modern phone with a 120 Hz screen, the browser asked for a new frame 120 times a second, and the renderer happily redrew the entire board every time, even when nothing was moving. Every orb had a soft glow and a gradient, which are expensive to draw."] },
      { h: "Measure first", p: [
        "Before changing anything I measured frame cost in a headless browser. A board with 73 orbs took 1.7 milliseconds per frame to draw. Not huge for one frame, but multiplied by 120 frames a second for an hour, it adds up to a phone that is warm to hold."] },
      { h: "Fix 1: draw orbs once as sprites", p: [
        "Instead of calculating the gradient and glow for each orb on every frame, I draw each orb style once to a small hidden canvas, a sprite, and then copy it with a cheap image draw. That cut the cost per frame from 1.7 to 0.7 milliseconds, about two and a half times faster."] },
      { h: "Fix 2: do not draw when nothing changes", p: [
        "The renderer now runs at about 30 frames a second while idle and 60 only while explosions are flying. Later I made it smarter still: it redraws only when something actually changed, drops to a very low rate after 30 seconds of inactivity and shows a still picture once the game is over. On a 120 Hz phone this is about ten times less drawing work."] },
      { h: "Fix 3: lite mode for older devices", p: [
        "Some phones are simply slow. The game now switches to a lite mode automatically on devices with four or fewer cores, two gigabytes of memory or less, data saver enabled or reduced motion requested, and also when it notices the screen is dropping frames. Players can override this in Settings with Auto, Lite or Full."] },
      { h: "Fix 4: quieter sound and effects", p: [
        "The audio system was keeping the phone's audio hardware awake. It now suspends after three seconds of silence. I also removed a blurred backdrop on dialog windows, which was surprisingly costly on low-end devices."] },
      { h: "What I measured afterwards", p: [
        "On a laptop test, the main thread usage while idle fell from about 20 percent to under 7 percent in lite mode, and memory stayed flat over a long run. I was careful to note that I could not measure on every real phone, so I kept the settings adjustable instead of promising one number."] },
    ],
  },
  {
    slug: "making-multiplayer-reliable",
    kind: "Behind the game",
    title: "Making Atom Reaction Multiplayer Reliable: Reconnects and Dropped Connections",
    h1: "Making multiplayer reliable: reconnects and dropped connections",
    description: "How Atom Reaction handles flaky mobile networks: automatic WebSocket reconnect, grace periods, seat recovery and bots that cover for dropped players.",
    blurb: "Automatic reconnect, seat recovery and bots that cover for dropped players.",
    intro: "Mobile networks drop out. People switch from Wi-Fi to data, lock their phone mid-game and walk into lifts. A multiplayer game that cannot cope with that is not much fun. Here is how Atom Reaction deals with it.",
    sections: [
      { h: "The problem", p: [
        "In the first version, if your connection blinked, the game showed a frozen board and you had to reload. Reloading often lost your seat, and the bot took over your turns almost immediately, so you came back to a game that had moved on."] },
      { h: "Automatic reconnect", p: [
        "The game now reconnects by itself. After a drop it retries with a growing delay, starting at half a second and increasing up to eight seconds. It also retries immediately when the page becomes visible again, when the network comes back or when you return to the tab. A small \"Reconnecting\" pill shows at the bottom so you know what is happening."] },
      { h: "Detecting a dead connection", p: [
        "Some connections die silently, so neither side notices. The client sends a small ping every fifteen seconds, and if nothing is heard for twenty five seconds it closes the socket and reconnects. In the worst case a silent failure is noticed in about forty seconds."] },
      { h: "Keeping your seat", p: [
        "Seat credentials used to live only in the tab. Now they are stored in the browser so that opening the invite link again, even in a new tab, gives you the same seat back instead of a new one."] },
      { h: "A fair grace period", p: [
        "When a player goes offline, the server now waits fifteen seconds before a bot plays their turn. It used to be just over a second, which was far too aggressive. The grace period covers a quick reconnect without making the other players wait for long."] },
      { h: "How I tested it", p: [
        "I tested reconnects with a real server and a small proxy placed in front of it. The proxy could reset connections, refuse them, or silently swallow traffic, which are three different failure modes that behave differently in browsers. Testing only the polite case, where the connection closes cleanly, would have missed the silent failure completely."] },
    ],
  },
  {
    slug: "building-the-bots",
    kind: "Behind the game",
    title: "How the Atom Reaction Bots Were Built: Search, Depth and Surprises",
    h1: "How the Atom Reaction bots were built",
    description: "How the four Atom Reaction bots work: alpha-beta search, depth limits, web workers and the surprising experiments where looking deeper made bots weaker.",
    blurb: "Alpha-beta search, web workers and the experiments that surprised us.",
    intro: "The computer players in Atom Reaction were one of the most interesting parts to build, mostly because the results kept surprising me. Here is how they work and what I learned from measuring them.",
    sections: [
      { h: "The basic idea", p: [
        "The bots use a classic game-search technique called alpha-beta search. The bot tries each move, imagines the opponent's best reply, then its own, and so on to a fixed depth, scoring the resulting boards. It picks the move that leads to the best score and skips branches that cannot be better, which makes the search much faster."] },
      { h: "Four levels", p: [
        "Easy searches two moves deep and picks randomly among its top choices, so it plays sensibly but not perfectly. Medium searches two moves and always takes its best. Hard searches four moves deep with a time limit of about a second and a half. Nightmare also searches four moves, with two seconds and a stronger way of scoring the board."] },
      { h: "Running in a web worker", p: [
        "A deep search can take a second or more. On the main thread that would freeze the screen. So the search runs in a web worker, a background thread in the browser, and the interface stays smooth while the bot thinks. There is a fallback to the main thread, and a minimum delay so the bot does not respond so quickly that it feels robotic."] },
      { h: "Surprise 1: deeper was not stronger", p: [
        "I assumed searching six moves deep would give a stronger bot than four. In tests with swapped sides and random openings, depth six and odd depths like three and five were actually weaker than four. I checked the search against a brute-force version to prove it was correct, so the cause was the way the board is scored, not a bug."] },
      { h: "Surprise 2: pruning moves hurt", p: [
        "I tried to speed things up by considering only the best few replies, a technique called beam search. A depth-four bot with this shortcut lost to a plain depth-two bot. Cutting the moves it considered removed exactly the surprising replies that a strong player finds."] },
      { h: "How I measured", p: [
        "Each level was tested against the next with random openings and the sides swapped, over many games, split across all CPU cores. I learned not to use fixed random seeds, because identical seeds replay the same game over and over and make results look more certain than they are.",
        "In the end I chose the strongest setup I could actually measure, even though I had planned a deeper search for Nightmare. A bot you can prove is stronger is better than one you merely hope is."] },
    ],
  },
  {
    slug: "saving-games-without-slowing-them",
    kind: "Behind the game",
    title: "Saving Atom Reaction Games to a Database Without Slowing Play",
    h1: "Saving games to a database without slowing play",
    description: "How Atom Reaction stores finished games in PostgreSQL that sleeps when idle: background queues, short connections, privacy purges and lessons learned.",
    blurb: "A sleeping PostgreSQL database, background queues and privacy purges.",
    intro: "Players like seeing their game history and a leaderboard. But storing every game must never slow a move or cost much to run. Here is how I added a database to a game that started life entirely in memory.",
    sections: [
      { h: "The requirement", p: [
        "Moves must stay instant, so the game itself never waits for the database. The database is also optional: if it is missing or asleep, the game keeps working. And because it is a hobby project, I wanted it to cost nothing when nobody is playing."] },
      { h: "A database that sleeps", p: [
        "I run PostgreSQL in a container that is started on demand. A small systemd socket listens for connections, and the first connection wakes the database, which takes about two and a half seconds. After three minutes with no connections it shuts itself down and uses no memory at all. When idle it costs nothing, and when awake it uses a few tens of megabytes."] },
      { h: "A background queue", p: [
        "When a game finishes, the result is put on a queue and saved in the background. If the database is still waking up, the save retries after one, three, ten and thirty seconds. The player never notices, because the game does not wait for the result."] },
      { h: "Short connections", p: [
        "A database that never sleeps because a connection pool holds it open defeats the whole idea. The pool keeps no idle connections and closes unused ones after about a minute, so the database can go back to sleep. Statistics and leaderboard responses are cached for five minutes, so most page views do not wake it either."] },
      { h: "Privacy by design", p: [
        "Anonymous players are identified only by a random id in their browser. A nightly job removes games older than a day where nobody was signed in, and anonymises guests in mixed games, replacing their names with \"Guest\". Signed-in players can edit their name, make their profile private or delete their account."] },
      { h: "What I learned", p: [
        "Treating the database as an optional add-on kept the game fast and robust. If I had started by making every move depend on it, a sleeping database would have turned into laggy games. Design the critical path to work without it, then add it on the side."] },
    ],
  },
];

export const getArticle = (slug) => articles.find((a) => a.slug === slug);
