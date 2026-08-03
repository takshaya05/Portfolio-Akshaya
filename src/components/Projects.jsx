const Projects = () => {

  const projects = [
    {
      title: "Smart Travel Intelligence Platform for Travelers",
      description: [
        "Created an AI-powered platform to simplify foreign country laws and travel guidance.",
        "Implemented Ollama chatbot support, law comparison features, and interactive dashboards.",
        "Built using React.js, Node.js, Python, and OpenAI API integration."
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Ollama"
      ],
      link: "https://github.com/takshaya05/TravizorHub"
    },


    {
      title: "AI-Powered Smart Tourist Safety & Emergency Response",
      description: [
        "Designed a real-time tourist safety system using AI-based threat detection and geo-fencing alerts.",
        "Integrated blockchain-based digital identity verification for secure traveler authentication.",
        "Developed using Python, Machine Learning, Blockchain, Firebase, React.js, and Node.js."
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "Blockchain"
      ],
      link: "https://github.com/takshaya05/SmartTourist"
    },


    {
      title: "Innovative Hospital Floor Planning Using Graphormers",
      description: [
        "Developed a multi-model AI system to automate hospital floor planning using CNN, Graphormer, and GAN architectures.",
        "Improved layout generation efficiency and optimization for healthcare infrastructure planning.",
        "Utilized Python, Machine Learning, and OpenCV for model development and implementation."
      ],
      technologies: [
        "Python",
        "Graphormer",
        "GAN"
      ],
      link: "https://github.com/takshaya05"
    },


    {
      title: "AI Country Dashboard",
      description: [
        "Developed an AI-powered educational dashboard to explore countries through 3D globe visualization, interactive modules, and real-time data insights.",
        "Implemented AI Chat Tutor using Ollama, country-based quizzes, flag matching games, and learning modules covering geography, history, economy, and current affairs.",
        "Built an immersive learning platform using React.js, AI integration, 3D visualization, and modern web technologies for interactive country exploration."
      ],
      technologies: [
        "React.js",
        "Ollama",
        "3D Visualization"
      ],
      link: "https://github.com/takshaya05/AiCountryDashboard"
    },


    {
      title: "CardVista",
      description: [
        "Developed an AR-powered digital visiting card platform that enables users to create, scan, and interact with futuristic 3D business cards directly through the browser.",
        "Implemented WebAR simulations with holographic cards, avatars, animations, QR scanning, voice introductions, and interactive contact actions.",
        "Built a modern glassmorphism interface with authentication, profile management, customizable scenes, and responsive design using React.js, Tailwind CSS, and Node.js."
      ],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "WebAR"
      ],
      link: "https://github.com/takshaya05/CardVista"
    },


    {
      title: "Akinator",
      description: [
        "Developed an interactive AI-based guessing game that predicts user-thought characters through a sequence of intelligent questions.",
        "Designed a responsive dark-themed interface with game flow management, instructions, contact features, and smooth navigation.",
        "Built using React.js, Vite, Tailwind CSS, and React Router DOM for a fast and engaging web experience."
      ],
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS"
      ],
      link: "https://github.com/takshaya05/Akinator"
    }
  ];


  return (
    <section id="projects" className="projects section">

      <div className="projects-container">

        <div className="section-title">
          <h2>Projects</h2>
          <span></span>
        </div>


        <div className="projects-grid">

          {
            projects.map((project, index) => (

              <div className="project-card" key={index}>

                <h3>
                  {project.title}
                </h3>


                <ul>
                  {
                    project.description.map((item, i) => (
                      <li key={i}>
                        {item}
                      </li>
                    ))
                  }
                </ul>


                <div className="tech-stack">

                  {
                    project.technologies.map((tech, i) => (
                      <span key={i}>
                        {tech}
                      </span>
                    ))
                  }

                </div>


                <a
                  href={project.link}
                  className="github-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>


              </div>

            ))
          }

        </div>

      </div>

    </section>
  );
};


export default Projects;