const Projects = () => {
  let background_url =  "/background.jpg";
  // Define an array of project objects
  const projects = [
    {
      title: 'Personal Website',
      description: 'Constructed a web application using React.js and Django Rest Framework (DRF) to exhibit my latest YouTube videos in a well-structured manner.',
      technologies: ['React.js', 'Django Rest Framework (DRF)'],
    },
    {
      title: 'Anonymous Poll',
      description: 'Engineered a web-based application catering to anonymous polling endeavors.',
      technologies: ['React.js', 'Django Rest Framework (DRF)', 'CSS'],
    },
    {
      title: 'Ecommerce',
      description: 'The e-commerce website built using Next.js is a fully functional online store that allows users to browse through different products and purchase them using a shopping cart.',
      technologies: ['Next.js', 'Bootstrap', 'React hooks'],
    },
    {
      title: 'Inotebook',
      description: 'Engineered a comprehensive note-taking web application, encompassing both frontend and backend components.',
      technologies: ['React.js', 'Django Rest Framework (DRF)', 'Bootstrap', 'Django ORM', 'Git'],
    },
    {
      title: 'Django ticketing system',
      description: 'A ticketing system built using Django and Django Rest Framework (DRF) that allows users to create tickets, assign them to other users, and track their progress.',
      technologies: ['Django', 'Django Rest Framework (DRF)', 'Bootstrap', 'Django ORM', 'Git'],
    },
    {
      title: 'Pdf Editor',
      description: 'A web application that allows users to upload pdf files and merge or delete pages.',
      technologies: ['React.js', 'Django Rest Framework (DRF)', 'Bootstrap', 'Django ORM', 'Git'],
    }
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
    <div style={{ backgroundImage: `url(${background_url})`, color: "white" }}>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={projectsStyle}>
          <h3 style={titleStyle}>{project.title}</h3>
          <p style={descriptionStyle}>{project.description}</p>
          <p style={technologiesStyle}>Technologies Used: {project.technologies.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
