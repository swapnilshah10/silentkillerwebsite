export const metadata = { title: "Projects", description: "Personal projects by Swapnil Shah: Atom Reaction, Dice Chess, Ultimate Tic Tac Toe and more.", alternates: { canonical: "/projects" } };

const Projects = () => {
  let background_url =  "/background.jpg";
  // Define an array of project objects
  const projects = [
    {
      title: 'Atom Reaction',
      description: 'Online multiplayer and battle-royale Chain Reaction board game with a FastAPI + WebSockets backend, Canvas 2D React frontend, Postgres, and Google sign-in.',
      technologies: ['React', 'FastAPI', 'WebSockets', 'PostgreSQL', 'Docker'],
      link: 'https://atomreaction.silentkillerop.me',
    },
    {
      title: 'Dice Chess',
      description: 'A chess variant where the dice roll decides which piece you can move.',
      technologies: ['Next.js', 'TypeScript', 'Zustand'],
      link: 'https://dicechess.silentkillerop.me',
    },
    {
      title: 'Ultimate Tic Tac Toe',
      description: 'Responsive neon-styled Ultimate Tic-Tac-Toe with the full ruleset: center start, routing, and wildcard boards.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://ultimatetictactoe.silentkillerop.me',
    },
    {
      title: 'Personal Website & URL Shortener',
      description: 'This site: a YouTube video hub plus a Bitly-style URL shortener, with ISR-cached pages on Vercel and a Django API served from my home server.',
      technologies: ['Next.js', 'Django Rest Framework (DRF)', 'Vercel', 'Cloudflare'],
      link: 'https://silentkillerop.me',
    },
    {
      title: 'Portfolio',
      description: 'Developer portfolio with an interactive particle canvas, animated stats, and SEO structured data.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://personal.silentkillerop.me',
    },
    {
      title: "Milla's Bakery",
      description: 'Website and hosting for a friend\'s home bakery, with WhatsApp/Instagram ordering, GA4 events, and SEO.',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
      link: 'https://github.com/swapnilshah10/MillaBakes',
    },
    {
      title: 'Traders Diary',
      description: 'Automated trading journal that syncs closed positions from broker APIs, computes analytics, and sends Telegram alerts.',
      technologies: ['Python', 'Trading APIs', 'Telegram'],
    },
    {
      title: 'Algorithmic Options Trading Engine',
      description: 'Backtesting framework and live execution bridge for Nifty/BankNifty options strategies on the Dhan broker API.',
      technologies: ['Python', 'DuckDB', 'Dhan API'],
    },
    {
      title: 'SplitKart',
      description: 'Splitwise-style expense-splitting app with multiple split methods, an append-only ledger, and debt simplification.',
      technologies: ['Go', 'PostgreSQL', 'React'],
    },
    {
      title: 'Personal Diary',
      description: 'Private journaling web app.',
      technologies: ['Next.js', 'SQLite'],
    },
    {
      title: 'Top 1% Profile Optimizer',
      description: 'Client-side AI app that analyzes a dating profile photo and bio with Gemini Vision and returns actionable feedback.',
      technologies: ['React', 'Google Gemini'],
    },
    {
      title: 'CouponDekho',
      description: 'Coupon and deals aggregator with a Django backend and React frontend.',
      technologies: ['React.js', 'Django', 'Django ORM'],
    },
    {
      title: 'Anonymous Poll',
      description: 'Web-based application for anonymous polling.',
      technologies: ['React.js', 'Django Rest Framework (DRF)', 'CSS'],
    },
    {
      title: 'Ecommerce',
      description: 'Online store with product browsing and a shopping cart.',
      technologies: ['Next.js', 'Bootstrap', 'React hooks'],
    },
    {
      title: 'Inotebook',
      description: 'Note-taking web application with frontend and backend.',
      technologies: ['React.js', 'Django Rest Framework (DRF)', 'Bootstrap', 'Django ORM'],
    },
    {
      title: 'Pdf Editor',
      description: 'Upload PDF files, then merge them or delete pages.',
      technologies: ['React.js', 'Django Rest Framework (DRF)', 'Bootstrap'],
    },
    {
      title: 'Blog',
      description: 'Blog application with a Next.js frontend and a backend API.',
      technologies: ['Next.js', 'React.js'],
    },
    {
      title: 'Video to Frames / Frame Music Archiver',
      description: 'Extracts frames from videos and archives them with music, as a Django app.',
      technologies: ['Python', 'Django'],
    },
    {
      title: 'YouTube Video Downloader',
      description: 'Simple web tool for downloading YouTube videos.',
      technologies: ['Python', 'Flask'],
    },
    {
      title: 'Instagram Posts Scraper',
      description: 'Browser extension and Python scripts that collect and process Instagram posts.',
      technologies: ['Python', 'JavaScript'],
    },
    {
      title: 'OCR with Hindi Translation',
      description: 'Notebook that reads text from images with OCR and translates it into Hindi.',
      technologies: ['Python', 'OCR'],
    },
    {
      title: 'IP Checker',
      description: 'Django app that shows and logs visitor IP addresses.',
      technologies: ['Django'],
    },
  ];

  // CSS styling for the projects section
  const projectsStyle = {
    backgroundImage: `url(${background_url})`,
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    // marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    marginBottom: '10px',
    backgroundImage: `url(${background_url})`,
  };

  const technologiesStyle = {
    fontStyle: 'italic',
    color: '#888888',
    backgroundImage: `url(${background_url})`,
  };

  return (
    <div style={{ backgroundImage: `url(${background_url})`, color: "white" }} className="playwrite-gb-s-example">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={projectsStyle}>
          <h3 style={titleStyle}>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>{project.title} ↗</a>
            ) : project.title}
          </h3>
          <p style={descriptionStyle}>{project.description}</p>
          <p style={technologiesStyle}>Technologies Used: {project.technologies.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
